/**
 * Review Form Validation
 */

import { u_debounced } from '../../../utils/utils';

const dswc_reviewsFormValidation = () => {
    /**
     * Select elements
     */
    const _wcReviewForm = document.querySelector('#commentform');
    if (!_wcReviewForm) return;

    const _wcTextInput = document.querySelectorAll('#commentform input#author, #commentform input#email, #commentform textarea');
    const _wcReviewSubmit = document.querySelector('#commentform input[type=submit]');
    const _wcReviewEmail = document.querySelector("#commentform [name='email']");
    const _wcReviewName = document.querySelector("#commentform [name='author']");
    const _wcReviewComment = document.querySelector("#commentform [name='comment']");

    /**
     * Set TRUE or FALSE
     * TRUE = for button to be disabled and enabled it after input validation.
     * FALSE = Form will validate on click.
     */
    const blur = true;

    /**
     * Set messages
     */
    const _messageRequired = 'This is a required field.';
    const _messageEmail = 'Your email is invalid.';
    /**
     * Set regex checks for inputs
     */
    const _validateRegexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Append errors
    const errorAppend = (t, m, c) => {
        const messageContainer = document.createElement('span');

        messageContainer.textContent = m;
        messageContainer.classList.add('wc-form-error');
        messageContainer.classList.add(`wc-form-error-${ c }`);
        t.parentNode.appendChild(messageContainer);
    };

    // Remove errors
    const errorRemove = (t) => {
        const error = t.parentNode.querySelectorAll('.wc-form-error');
        if (error) {
            error.forEach((err) => {
                err.remove();
            });
        }
    };

    // Validate inputs and append messages function
    const validateRequired = (t, message, messageClass, regex, regexMessage) => {
        if (!t.checkValidity()) {
            if (!t.parentNode.querySelector(`.wc-form-error-${ messageClass }`)) {
                if (regex && !t.value.match(regex)) {
                    errorAppend(t, regexMessage, messageClass);
                } else {
                    errorAppend(t, message, messageClass);
                }
            }
            return false;
        }

        errorRemove(t, messageClass);
        return true;
    };

    // Validation
    const validateFields = () => {
        // Validate name
        const _isNameValid = () => {
            if (!_wcReviewName) return;

            const _validateName = () => validateRequired(_wcReviewName, _messageRequired, 'required');

            _wcReviewName.addEventListener('input', () => {
                const debounceValidation = u_debounced(() => {
                    _validateName();
                }, 150);
                debounceValidation();
            });

            return _validateName();
        };

        // Validate comment
        const _isCommentValid = () => {
            if (!_wcReviewComment) return;

            const _validateComment = () => validateRequired(_wcReviewComment, _messageRequired, 'required');

            _wcReviewComment.addEventListener('input', () => {
                const debounceValidation = u_debounced(() => {
                    _validateComment();
                }, 150);
                debounceValidation();
            });

            return _validateComment();
        };

        // Validate email with regex
        const _isEmailValid = () => {
            if (!_wcReviewEmail) return;
            const _validateEmail = () => validateRequired(_wcReviewEmail, _messageRequired, 'required', _validateRegexEmail, _messageEmail);

            _wcReviewEmail.addEventListener('input', () => {
                const debounceValidation = u_debounced(() => {
                    _validateEmail();
                }, 150);
                debounceValidation();
            });

            return _validateEmail();
        };

        // Init input validations
        _isNameValid();
        _isCommentValid();
        _isEmailValid();

        // Return TRUE or False
        if (!document.querySelector('body').classList.contains('logged-in')) {
            return _isNameValid() && _isCommentValid() && _isEmailValid();
        }
        return _isCommentValid();
    };

    // Init validation
    if (blur) {
        _wcReviewSubmit.setAttribute('disabled', '');

        function validate() {
            if (!validateFields()) {
                // evt.preventDefault();
                validateFields();
                _wcReviewSubmit.setAttribute('disabled', '');

            } else {
                _wcReviewSubmit.removeAttribute('disabled');
            }
        }

        _wcTextInput.forEach((item) => {
            const eventList = ['focusin', 'focusout', 'input'];

            eventList.forEach((event) => {
                item.addEventListener(event, (evt) => {
                    const debounceValidation = u_debounced(() => {
                        evt.preventDefault();
                        validate();
                    }, 150);
                    debounceValidation();
                }, true);
            });
        });
    } else {
        _wcReviewForm.addEventListener('submit', (evt) => {
            if (!validateFields()) {
                evt.preventDefault();

                validateFields();
            }
        }, true);
    }
};

export {
    dswc_reviewsFormValidation,
};
