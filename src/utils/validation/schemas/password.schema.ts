import * as Yup from "yup";

const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;

const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password min length 8 letters")
    .matches(
      passRegex,
      "Your password does not meet the required criteria. Please ensure that your password:\n" +
        "\n" +
        "Is at least 8 characters long.\n" +
        "Contains at least one uppercase letter (A-Z).\n" +
        "Contains at least one lowercase letter (a-z).\n" +
        "Includes at least one digit (0-9).\n" +
        "Has at least one special character from the following set: !@#$%^&*()\n" +
        "Please adjust your password to comply with these requirements.",
    )
    .required("Field is required"),
  passwordRepeat: Yup.string()
    .min(8, "Password min length 8 letters")
    .matches(
      passRegex,
      "Your password does not meet the required criteria. Please ensure that your password:\n" +
        "\n" +
        "Is at least 8 characters long.\n" +
        "Contains at least one uppercase letter (A-Z).\n" +
        "Contains at least one lowercase letter (a-z).\n" +
        "Includes at least one digit (0-9).\n" +
        "Has at least one special character from the following set: !@#$%^&*()\n" +
        "Please adjust your password to comply with these requirements.",
    )
    .required("Field is required"),
  currentPassword: Yup.string()
    .min(8, "Password min length 8 letters")
    .matches(
      passRegex,
      "Your password does not meet the required criteria. Please ensure that your password:\n" +
        "\n" +
        "Is at least 8 characters long.\n" +
        "Contains at least one uppercase letter (A-Z).\n" +
        "Contains at least one lowercase letter (a-z).\n" +
        "Includes at least one digit (0-9).\n" +
        "Has at least one special character from the following set: !@#$%^&*()\n" +
        "Please adjust your password to comply with these requirements.",
    )
    .optional(),
});

export { passwordSchema };
