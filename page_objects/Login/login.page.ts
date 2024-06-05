import { Locator } from '@playwright/test';
import IndexPage from '../index.page';

export default class LoginPage extends IndexPage {
    constructor(page: any) {
        super(page);
    }

    get $sign_up_link(): Locator {return this.page.locator('#signup-link')}
    get $forgot_password_link(): Locator {return this.page.locator('#forgot-password-link')}
    get $main_val_alert_message_selector(): string {return 'div.MuiAlert-root > div.MuiAlert-message'}
    get $main_val_alert_message(): Locator {return this.page.locator('div.MuiAlert-root > div.MuiAlert-message')}   // $main_val_alert_message works for login form and reset password form
    get $username_val_message(): Locator {return this.page.locator('#login-username-input-helper-text')}            // $username_val_message works for login form and reset password form
    get $login_password_val_message(): Locator {return this.page.locator('#login-password-input-helper-text')}
    get $password_reset_button(): Locator {return this.page.locator('#password-reset-btn')}
    get $password_reset_submit_button(): Locator {return this.page.locator('#submit-action-btn')}
    get $password_reset_disabled_button(): Locator {return this.page.getByText('EmailEmail me a recovery link')}
    get $password_reset_success_message(): Locator {return this.page.locator('.MuiAlert-message')}
}