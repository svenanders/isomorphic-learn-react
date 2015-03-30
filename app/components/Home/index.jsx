'use strict';

const React = require("react"),
    { Grid, Col, Row} = require('react-bootstrap'),
    {Link} = require('react-router'),
    {McFlyRoute, LoginRoute} = require('../routes.jsx'),
/*    {ReactFireRoute, McFlyRoute, ButtonRoute, StaticsRoute, StickyRoute,
        LoginRoute, MarkdownRoute, RefluxRoute, FormsRoute,
        ChartsRoute, AnimationsRoute, BreadcrumbsRoute, ComponentRoute} = require('../routes.jsx'),
*/
    ApiStore = require("../Mcfly/store"),
    RefluxStore = require("../Reflux/store"),
    //Rx = require('rx'),
    LoginStore = require("../Login/store"),
    PureRenderMixin = require('react/addons').addons.PureRenderMixin;


    export default React.createClass({
    mixins: [PureRenderMixin],
    displayName: 'Home',
    componentDidMount(){
        console.log('%cWelcome to Learn React! ', 'background: #333; color: #aaa');
        console.log('%cLearn React!', 'font-weight:bold;', 'is a collection of examples, ' +
        'modules and tutorials for Reactjs');console.log('Additional examples ' +
        'are being added every now and then, so be sure to ' +
        'bookmark and come again!');
        console.log('%chttp://learnreact.robbestad.com','background: #999;');
    },
    render() {

        return <Grid className="flyin-widget">
            <Row className="show-grid" >


                <Col md={12}>
                    <p className="columnBox">
                    <strong>Learn React</strong>
                &nbsp; is a collection of React examples,
                    modules and tutorials. More will be coming
                    every now and then, so be sure to bookmark and come back or star/fork it
                    on&nbsp;
                    <a href="https://github.com/svenanders/learn-react">github</a>
                    .
                    </p>
                </Col>
            </Row>
            <Row className="show-grid">
                <Col md={12}>
                    <h2 className="columnBox">Components</h2>
                </Col>
            </Row>


            <Row>

                <Col xs={12} md={6} >
                    <p className="columnBox">

                    <Link to={LoginRoute.name}>
                        <strong>
                            Login example
                        </strong>
                    </Link>
                    <br/>
                    Demonstrates a login component that passes credentials to a third party API and
                    authenticates with Oauth2.
                    <br/>

                    <em>Current login status: {LoginStore.isAuthenticated().toString()}</em>

                    <br/>
                    <span className="label blue">Login</span>
                    &nbsp;
                    <span className="label blue">McFly</span>
                    &nbsp;
                    <span className="label blue">Oauth</span>
                    </p>


                </Col>

                <Col xs={12} md={6} className="columnBox">
                    <p className="columnBox">
                    <Link to={McFlyRoute.name}>
                        <strong>
                            McFly example
                        </strong>
                    </Link>
                    <br/>
                    This component uses McFly to populate a datastore with a JSON resource using AJAX.
                    <br/>
                    The McFly store currently holds&nbsp;
                    <strong>{ApiStore.getPosts().length}</strong>
                &nbsp;objects
                    <br/>
                    <span className="label blue">McFly</span>
                &nbsp;
                    <span className="label blue">Flux</span>
                &nbsp;
                    <span className="label blue">JSON</span>
                </p>

                </Col>
            </Row>
        </Grid>
    }
});