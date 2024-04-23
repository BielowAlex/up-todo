import { ApiError } from "../../types";

export const transformErrorData = (error: ApiError | any) => {
  try {
    if (
      typeof error === "object" &&
      error !== null &&
      "data" in error &&
      error.data.error
    ) {
      const {
        data: {
          error: { details },
        },
      } = error as ApiError;

      return details;
    }
  } catch (e) {
    console.error(e);
  }

  return error;
};
