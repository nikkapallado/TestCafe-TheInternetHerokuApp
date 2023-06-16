import {Selector} from 'testcafe';

const chooseFileButton = Selector('input#file-upload');
const uploadButton = Selector('input.button#file-submit');
const fileUploadedHeader = Selector('h3');
const uploadedFilename = Selector('#uploaded-files');

fixture('File upload fixture')
    .page('https://the-internet.herokuapp.com/upload');

test('File upload test', async test_controller => {
    await test_controller
        .setFilesToUpload(chooseFileButton, '../upload/sample.jpg')
        .click(uploadButton)
        .expect(fileUploadedHeader.textContent).eql('File Uploaded!')
        .expect(uploadedFilename.innerText).eql('sample.jpg')
});

test('Clear file test', async test_controller => {
    await test_controller
        .setFilesToUpload(chooseFileButton, '../upload/sample.jpg')
        .clearUpload(chooseFileButton)
        .setFilesToUpload(chooseFileButton, '../upload/sample.jpg')
        .click(uploadButton)
        .expect(fileUploadedHeader.textContent).eql('File Uploaded!')
        .expect(uploadedFilename.innerText).eql('sample.jpg')
});