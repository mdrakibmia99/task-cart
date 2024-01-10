import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AttachmentFile from "../components/AttachmentFile/AttachmentFile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path:"/test",
      element: <AttachmentFile/>
    }
  ]);
  export default router