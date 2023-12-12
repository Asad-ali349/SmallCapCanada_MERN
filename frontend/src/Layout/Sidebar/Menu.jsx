export const MENUITEMS = [
  {
    menutitle: "General",
    menucontent: "Dashboards,Widgets",
    Items: [

         { path: '/dashboard', icon: "icofont-home", title: "Dashboard", type: "link" },
         { path: '/todays_pick', icon: "icofont-ui-user", title: "Today's Pick", type: "link" },
         { path: '/how_to_trade', icon: "icofont-settings-alt", title: "How To Trade", type: "link" },
         { path: '/terms_of_use', icon: "icofont-settings-alt", title: "Terms Of Use", type: "link" },
         { path: '/privacy_policy', icon: "icofont-settings-alt", title: "Privacy & Policy", type: "link" },
         { path: '/disclaimer', icon: "icofont-settings-alt", title: "Disclaimer", type: "link" },
    ],
  },
    {
    menutitle: "SETTINGS",
    menucontent: "Ready to use Apps",
    Items: [
      { path: '/profile', icon: "icofont-settings-alt", title: "Profile", type: "link" },
      { path: '/change_password', icon: "icofont-settings-alt", title: "Change Password", type: "link" },
      { path: `${process.env.PUBLIC_URL}/`, icon: "icofont-ui-user", title: "Logout", type: "link" },
    
    ],
  },


];
