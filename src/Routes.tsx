import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import FriendList from "pages/FriendList";
import ActivityFeed from "pages/ActivityFeed";
import AddFriends from "pages/AddFriends";
import InstagramSignin from "pages/InstagramSignin";
import FacebookFeed from "pages/FacebookFeed";
import Followers from "pages/Followers";
import UserAccount from "pages/UserAccount";
import EcoConnectFeedPage from "./pages/EcoConnectFeedPage";

const ProjectRoutes = () => {
  let element = useRoutes([
      { path: "/", element: <Home /> },
      { path: "*", element: <NotFound /> },
        {
            path: "friendlist", element: <FriendList />,
        },
        {
            path: "activityfeed", element: <ActivityFeed />,
        },
        {
            path: "addfriends", element: <AddFriends />,
        },
        {
            path: "instagramsignin", element: <InstagramSignin />,
        },
        {
            path: "facebookfeed", element: <FacebookFeed />,
        },
        {
            path: "followers", element: <Followers />,
        },
        {
            path: "useraccount", element: <UserAccount />,
        },
        {
            path: "feedPage", element: <EcoConnectFeedPage />,
        }
    ]);
    return element;

}
export default ProjectRoutes;