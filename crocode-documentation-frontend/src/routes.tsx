import { Routes, Route } from "react-router-dom";
import DocumentPage from "pages/DocumentPage";
import Editor from "@sections/Editor";
import UsersListComponent from "@components/users/UsersListComponent";
import PrivateRoute from "@components/routes/PrivateRoute";
import ContactUsPage from "@pages/ContactUsPage";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DocumentPage />}>
        <Route element={<Editor />} path="/:documentId" />
        <Route element={<ContactUsPage />} path="/contact-us" />

        {/* <Route element={
            <PrivateRoute isAdmin={true}>
              <UsersListComponent />
            </PrivateRoute>
          }
          path="/users"
        /> */}
      </Route>
    </Routes>
  );
};
