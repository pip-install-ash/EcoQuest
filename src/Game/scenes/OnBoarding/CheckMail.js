import {
  addButton,
  addCheckButton,
  addText,
  blurInputs,
  emptyInputs,
  hideInputs,
  scaleBackground,
} from "../../partials/common";

const createOnBoardingCheckMailScene = () => {
  return {
    key: "OnBoardingCheckMailScene",
    preload: function () {},

    create: function () {
      scaleBackground(this, "CheckEmailBackground");
      addText(
        this,
        "Enter the 6 digit code sent to hello********@email.com",
        720,
        316,
        "20px Rounded Mplus 1c",
        "#000",
        0.5,
        0
      );
      addButton(this, "VerifyButton", 720, 535, () => {
        emptyInputs();
        blurInputs();
        hideInputs();
        this.scene.start("OnBoardingNewPassScene");
      });
      addButton(this, "SignInTextButton", 765, 595, () => {
        emptyInputs();
        blurInputs();
        hideInputs();
        this.scene.start("OnBoardingSignInScene");
      });
      addButton(this, "ResendButton", 835, 465, () => {});

      for (var i = -2.5; i < 3; i++) {
        addCheckButton(
          this,
          "DigitalInputOn",
          "DigitalInput",
          false,
          720 + i * 80,
          400,
          () => {}
        );
      }
    },
  };
};

export default createOnBoardingCheckMailScene;
