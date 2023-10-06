export type StackNavigatorParamsList = {
  TabNavigator: {};
  Test: {
    test: string;
  };
  Modal: {
    content: () => JSX.Element;
    title: string;
  };
  // Auth
  Landing: {};
  Login: {};
  Register: {};
};

export type TabNavigatorParamsList = {
  Home: {
    content: () => JSX.Element;
  };
  Sample: {};
  Settings: {
  };
};