import { type Locator, Page } from '@playwright/test';
import EnvVariable from '../utils/env_variables';
import { iEnvVariables } from '../utils/types';

const envVariables = EnvVariable.getEnvVariables();

class IndexPage {
    readonly page: Page;
    readonly envVariables: iEnvVariables;

    constructor(page: Page) {
        this.page = page;
        this.envVariables = EnvVariable.getEnvVariables();
    }
    
    get $login_username_input(): Locator {return this.page.locator('#login-username-input')}
    get $login_password_input(): Locator {return this.page.locator('#login-password-input')}
    get $login_button(): Locator {return this.page.locator('#login-action-btn')}
    get $2FA_cancel_button(): Locator {return this.page.locator('#cancel-btn')}
    get $2FA_remind_later_button(): Locator {return this.page.locator('#custom-text-back-btn > .MuiButton-label')}
    get $remind_me_later_button(): Locator {return this.page.getByRole('button', { name: 'Remind me later' })}
    get $login_cancel_button(): Locator {return this.page.getByRole('button', { name: 'C ContractusFirm' })}

    async goto(url: string = '/') {
        await this.page.goto('/');
    }

    async login() {
        await this.$login_username_input.fill(envVariables.SCALAR_USERNAME);
        await this.$login_password_input.fill(envVariables.SCALAR_PASSWORD);
        await this.$login_button.click();
        await this.$2FA_cancel_button.isVisible();
        await this.$2FA_cancel_button.click();
        await this.$remind_me_later_button.click();
        await this.page.getByRole('button', { name: 'C ContractusFirm' }).click();
    }
}

export default IndexPage;