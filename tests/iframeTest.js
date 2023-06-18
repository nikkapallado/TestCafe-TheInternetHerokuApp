import {Selector} from 'testcafe';

const iframe = Selector('iframe#mce_0_ifr');
const textArea = Selector('body#tinymce.mce-content-body ');

fixture('iFrame fixture')
    .page('https://the-internet.herokuapp.com/iframe');

test('iframe test', async test_controller => {
    await test_controller
        .switchToIframe(iframe)
        .click(textArea)
        .pressKey('ctrl+a delete')
        .typeText(textArea,'Hello World!')
        .expect(textArea.innerText).contains('Hello World!')
        .switchToMainWindow();
});