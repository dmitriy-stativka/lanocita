import {u_getParameterByName} from "../utils/u_params";

const ds_loadMoreBlog = () => {
    (function ($) {
        let DSInitFilter = function (module) {
            const filter = {
                module: null,
                action: null,
                form: '',
                moreBtn: $(),
                results: null,
                doing_ajax: null,
                timeout: null,
                query: {
                    post_type: null,
                    per_page: 9,
                    page:  1,
                    main_taxonomy: null,
                },
                component_styles: {},
                page_num: 1,
                ajax_url: ds.ajax_url,
                page_get_parameter_enable: false,
                preloader: '<div class="filter-loader loader"><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div><div class="loader-bg"></div></div>',
                init(module) {
                    const ajaxModule = $(module);
                    const initialPageNumber = u_getParameterByName('page_num');

                    if (ajaxModule) {
                        filter.module = ajaxModule;

                        filter.action = ajaxModule.data('action');
                        filter.query.page = initialPageNumber !== '' ? parseInt(initialPageNumber) : 1;
                        filter.query.post_type = ajaxModule.data('post-type');
                        filter.query.posts_per_page = ajaxModule.data('per-page');
                        filter.query.main_taxonomy = ajaxModule.data('main-taxonomy');

                        filter.page_get_parameter_enable = ajaxModule.data('page-parameter') === true;

                        filter.initElementsActions();
                    }

                },
                initElementsActions() {
                    const results = filter.module.find('div[data-container="ajax-result"]');

                    if (results) {
                        filter.results = results;

                        const moreBtn = filter.module.find('.ajax-load-more');
                        if (moreBtn) {
                            filter.moreBtn = moreBtn;
                            filter.morePosts();
                        }

                        const form = filter.module.find('form[data-form="ajax"]');
                        if (form) {
                            filter.form = form;
                            filter.changeForm();
                        }
                    }

                    const compClass = filter.module.data('class');
                    if (compClass) {
                        filter.component_styles.class = compClass;
                    }

                    const compStyles = filter.module.data('styles');
                    if (compStyles) {
                        filter.component_styles.styles = compStyles;
                    }

                    const compImage = filter.module.data('image');
                    if (compImage) {
                        filter.component_styles.image = compImage;
                    }
                },
                morePosts() {
                    filter.moreBtn.on('click', (e) => {
                        e.preventDefault();

                        filter.sendAjax(filter.query.page, true, true);
                    });
                },
                changeForm() {
                    const $input_text = filter.form.find('input[type="text"], textarea');
                    $input_text.unbind('keyup');
                    $input_text.not('[data-ajax="false"]').keyup((e) => {
                        if (e.keyCode === 13) {
                            return;
                        }

                        if (filter.timeout != null) {
                            clearTimeout(filter.timeout);
                        }
                        filter.timeout = setTimeout(() => {
                            filter.timeout = null;
                            filter.sendAjax();
                            $input_submit.parent().addClass('is-filter-active');
                        }, 500);
                    });

                    let $input_submit = filter.form.find('button[type="submit"]');
                    $input_submit.unbind('click');
                    $input_submit.not('[data-ajax="false"]').click((e) => {
                        e.preventDefault();
                        filter.sendAjax();
                        $input_submit.parent().addClass('is-filter-active');
                    });

                    const $select = filter.form.find('select');
                    $select.unbind('change');
                    $select.not('[data-ajax="false"]').change(() => {
                        filter.sendAjax();
                    });

                    $select.filter('[data-target="input"]').change((e) => {
                        let $currentItem = $(e.target);
                        let $inputTarget = filter.form.find(`input.${ $currentItem.data('target-name') }`);
                        if ($inputTarget) {
                            let $selectedOption = $currentItem.find('option:selected');
                            $inputTarget.val($selectedOption.val());
                            $inputTarget.data('push-url', $selectedOption.data('term-url'));

                            filter.sendAjax();
                        }
                    });

                    $select.filter('[data-target="ul"]').change((e) => {
                        let $currentItem = $(e.target);
                        filter.form.find(`ul.${ $currentItem.data('target-name') }`).find(`li a[data-term-slug="${ $currentItem.find('option:selected').val() }"]`).trigger('click');
                        filter.sendAjax();
                    });

                    const $list = filter.form.find('ul[data-ajax-push-url="true"]').first();
                    $list.unbind('change');
                    $list.find('li a').click((e) => {
                        e.preventDefault();
                        $list.find('li a').removeClass('active_term');
                        let $activeTerm = $(e.target);
                        $activeTerm.addClass('active_term');

                        let $inputTarget = filter.form.find(`input.${ $list.data('target-name') }`);
                        if ($inputTarget) {
                            $inputTarget.val($activeTerm.data('term-slug'));
                            $inputTarget.data('push-url', $activeTerm.attr('href'));
                            filter.form.find(`select.${ $list.data('target-name') } option[value="${ $activeTerm.data('term-slug') }"]`)?.prop('selected', true);

                            filter.sendAjax();
                        }
                    });

                    filter.form.unbind('keydown');
                    filter.form.on('ds_trigger_browser_button_used', (event) => {
                        event.preventDefault();
                        filter.sendAjax(0, false, false, true);
                    });
                },
                sendAjax(page = 0, push_state = true, load_more_used = false, browser_button_used = false) {
                    if (filter.doing_ajax != null) {
                        filter.doing_ajax.abort();
                        filter.doing_ajax = null;
                        filter.module.find('.loader').remove();
                    }


                    let data = {
                        action: filter.action,
                        query: {
                            post_type: filter.query.post_type,
                            posts_per_page: filter.query.posts_per_page,
                            paged: page,
                        },
                        main_taxonomy: filter.query.main_taxonomy,
                        component: filter.component_styles,
                        device: $(window).width() <= 768 ? 'mobile' : 'desktop',
                        browser_button_used: browser_button_used,
                    };

                    if (filter.form.length > 0) {
                        data.form = filter.form.serialize();
                    }

                    if (push_state) {
                        filter.build_url(data.query.paged, load_more_used);
                    }

                    if (filter.page_get_parameter_enable) {
                        page = u_getParameterByName('page_num') ?? data.query.paged;
                        data.query.paged = page;
                    }

                    filter.doing_ajax = $.ajax({
                        url: filter.ajax_url,
                        type: 'POST',
                        data,
                        beforeSend(xhr) {
                            filter.module.append(filter.preloader);
                        },
                        success(data) {
                            if (data) {

                                if (data.page == 1 || data.page == 0) filter.results.html('');

                                filter.results.append(data.posts);

                                if (data.max_pages === data.page) {
                                    filter.moreBtn.hide();
                                } else {
                                    filter.moreBtn.show();
                                }

                                if (data.total_posts_showing === 0) {
                                    filter.module.find('.js-blog-counter-wrapper').hide();
                                } else {
                                    filter.module.find('.js-blog-counter-wrapper').show();
                                }

                                if (data.total_posts_showing) {
                                    filter.module.find('.js-blog-counter-showing').text(data.total_posts_showing);
                                    filter.module.find('.js-total-items-shown').val(data.total_posts_showing)
                                }

                                if (data.total_posts) {
                                    filter.module.find('.js-blog-counter-total').text(data.total_posts);
                                }

                                page = u_getParameterByName('page_num') ?? data.query.paged;
                                page = filter.page_get_parameter_enable ? page : parseInt(data.page);
                                filter.query.page = page;
                                filter.module.find('.js-page-num').val(page);

                                filter.moreBtn.attr('data-page', data.page);
                                filter.module.find('.loader').remove();
                            } else {
                                filter.moreBtn.hide();
                            }

                            filter.doing_ajax = null;
                        },
                    });
                },
                build_url(paged = 1, push_page_num = false) {
                    var url_parse_side = window.location.href.split("?");
                    var url = new URL(url_parse_side[0]);
                    var oldUrl = new URL(window.history.state && window.history.state.path ? window.history.state.path : window.location.href);
                    var push_state = false;

                    let inputPushUrl = filter.form.find('input[data-push-url]').first().data('push-url') ?? '';
                    if (inputPushUrl !== '') {
                        push_state = true;
                        url.href = inputPushUrl;
                    }

                    if (push_page_num) {
                        url.searchParams.set('page_num',( isNaN(parseInt(filter.query.page)) ? 1 : parseInt(filter.query.page) ) + 1);
                        push_state = true;
                    } else {
                        url.searchParams.delete('page_num');
                    }

                    filter.form.find('input[type=text]:not([data-ajax="false"])').each(function () {
                        push_state = true;
                        if (jQuery(this).val().length > 0) {
                            url.searchParams.set(jQuery(this).attr('name'), jQuery(this).val());
                        }
                    });

                    filter.form.find('select:not([data-ajax="false"])').each(function () {
                        push_state = true;
                        if (jQuery(this).find('option:selected').val().length > 0) {
                            url.searchParams.set(jQuery(this).attr('name'), jQuery(this).find('option:selected').val());
                        }
                    });

                    const decoded_url = decodeURIComponent(url);
                    if (push_state && (oldUrl.searchParams.toString() !== url.searchParams.toString() || oldUrl.href !== url.href)) {
                        window.history.pushState({ 'path': decoded_url, 'ds_trigger_filter': true, paged: paged }, null, decoded_url);
                    }
                },
            };

            filter.init(module);
        };

        const doInit = () => {

            $('.js-ajax-block').each((i) => {
                DSInitFilter($('.js-ajax-block')[i]);
            });

        };

        doInit();

        addEventListener('popstate', event => {
            $('.js-ajax-block').each((i, item) => {
                reInitFilter(item);
            });
        });


    }(jQuery));

}

const reInitFilter = (filter) => {
    const parsedUrl = window.location.href.split("?");
    const currentUrl = new URL(window.location.href.toString());
    const cleanedUrl = new URL(parsedUrl[0]);

    let params = currentUrl.searchParams;
    let triggerChange = false;
    const form = $(filter).find('form[data-form="ajax"]');

    let $pageNum = form.find('.js-page-num');
    if ($pageNum.length > 0) {
        $pageNum.val(params.get('page_num') ?? 1);
        triggerChange = true;
    }

    form.find('input[type=text]:not([data-ajax="false"])').each(function (index, elem) {
        let $this = $(elem);
        $this.val(params.get($this.attr('name')) ?? '');
        triggerChange = true
    });

    form.find('select:not([data-ajax="false"])').each(function (index, elem) {
        let $this = $(elem);
        let value = params.get($this.attr('name')) ?? '';
        if (value !== '') {
            $this.find(`option[value=${ value }]`).prop('selected', true);
        } else {
            $this.find('option:eq(0)').prop('selected', true);
        }
        triggerChange = true
    });

    form.find('ul[data-ajax-push-url="true"]:first li a').each(function (index, elem) {
        let $this = $(elem);
        if ($this.attr('href') === cleanedUrl.href && !$this.hasClass('active_term')) {
            $this.trigger('click');
            triggerChange = true;
        }
    });

    form.find('select[data-target="input"]').each(function (index, elem) {
        let $this = $(elem);
        let selectedOption = $this.find('option:selected');
        let $inputTarget = form.find(`input.${ $this.data('target-name') }`);

        if (selectedOption.data('term-url') !== cleanedUrl.href) {
            $this.find(`option[data-term-url="${ cleanedUrl.href }"]`).prop('selected', true);

            let $newSelectedOption = $this.find('option:selected');
            $inputTarget.val($newSelectedOption.val());
            $inputTarget.data('push-url', $newSelectedOption.data('term-url'));
            triggerChange = true;
        }
    });

    if (triggerChange) {
        form.trigger('ds_trigger_browser_button_used');
    }
}

export {
    ds_loadMoreBlog,
}
