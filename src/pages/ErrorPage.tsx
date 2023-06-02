import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{isRouteErrorResponse(error) && error?.status}</p>
      <p>
        <i>
          {isRouteErrorResponse(error)
            ? // error is type `ErrorResponse`
              error.error?.message || error.statusText
            : "Unknown error message"}
        </i>
      </p>
    </div>
  );
}
