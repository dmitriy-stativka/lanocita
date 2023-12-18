/**
 * Ask a question button
 */

import { u_throttled } from '../utils/utils';

const dswc_askAQuestion = () => {
    const wNeedHelp = document.querySelector('.w-need-help__widget');
    if (!wNeedHelp) return;

    const wNeedHelpOpen = wNeedHelp.querySelector('.js-w-help-open');
    const wNeedHelpClose = wNeedHelp.querySelectorAll('.js-w-help-close');
    const wNeedHelpWidget = wNeedHelpOpen.closest('.w-need-help__widget');

    wNeedHelpOpen.addEventListener('click', (e) => {
        e.preventDefault();
        wNeedHelpWidget.querySelector('.w-need-help__popup').classList.add('is-active');
        document.body.classList.add('ds-w-help-active');
    })

    wNeedHelpClose.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            wNeedHelpWidget.querySelector('.w-need-help__popup').classList.remove('is-active');
            document.body.classList.remove('ds-w-help-active');
        })
    })

    const throttleScrollAsk = u_throttled(() => {
        const footer = document.querySelector('.site-footer');
        const askQuestionTrigger = document.querySelector('#w-need-help-toggle');
        if (!askQuestionTrigger) return;

        function callback(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Show button
                    askQuestionTrigger.style.opacity = '0';
                    askQuestionTrigger.style.visibility = 'hidden';
                    askQuestionTrigger.style.pointerEvents = 'none';
                } else {
                    // Hide button
                    askQuestionTrigger.style.opacity = '1';
                    askQuestionTrigger.style.visibility = 'visible';
                    askQuestionTrigger.style.pointerEvents = 'all';
                }
            });
        }

        const observer = new IntersectionObserver(callback);
        observer.observe(footer);

    }, 30);

    document.addEventListener('scroll', throttleScrollAsk);

    $(document).bind('gform_confirmation_loaded', function (event, formId) {
        const needHelpSubmission = $(`#need_help #gform_confirmation_wrapper_${ formId }`);
        const needHelpWrapper = $('#need_help');

        if (needHelpSubmission?.length > 0 && needHelpWrapper?.length > 0) {
            needHelpWrapper.find('.js-w-help-success-hide').hide();
        }
    });
}

export {
    dswc_askAQuestion,
}
