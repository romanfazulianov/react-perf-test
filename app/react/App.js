/**
 * Created by fazdev on 07.09.16.
 */
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import Page from "./elements/Page";

//needed for Material-UI
import injectTapEventPlugin from "react-tap-event-plugin";
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
            <Page/>
        </Provider>,
    document.getElementById("app")
);