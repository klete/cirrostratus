import Auth from "@aws-amplify/auth";


export const handleLogout = (props) => async () => {
  //clear the session
  await Auth.signOut();
  sessionStorage.clear();
  props.userHasAuthenticated(false);
  props.history.push("/login");
  // window.location.assign('/login');
 };