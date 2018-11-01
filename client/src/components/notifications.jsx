
/*
notifications view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the notifications view is a data-bound list based view with a repeating template containing User Account Photo, Table Row elements
the notifications view has a status bar located at the very-top across the full width of the view
notifications view has Navigation Bar located at the very-top across the full width of the view
notifications view has a Datatype located at the very-top in the center of the view with text notifications when they are live
notifications view has Label located at the top center of the view, text needs identified
notifications view has Table View that scrolls horizontal
notifications view has a Button located at the top center of the view with text follow
notifications view has Label located at the top center of the view, text needs identified
notifications view has a Label located at the top center of the view with text 9 id: 42983213
notifications view has Label located at the mid-top center of the view, text needs identified
notifications view has Table View that scrolls horizontal
notifications view has a Label located at the mid-top center of the view with text id: 34983532
notifications view has a Button located at the mid-top center of the view with text follow
notifications view has Table View that scrolls vertical
notifications view has Label located at the main area center of the view, text needs identified
notifications view has Label located at the main area center of the view, text needs identified
notifications view has an Image located at the mid-bottom left of the view. this is a placeholder and should be updated with higher resolution Image
notifications view has Label located at the mid-bottom center of the view, text needs identified
notifications view has Label located at the mid-bottom center of the view, text needs identified
notifications view has Label located at the mid-bottom center of the view, text needs identified
notifications view has Label located at the bottom center of the view, text needs identified
notifications view has Label located at the bottom center of the view, text needs identified
notifications view has a Label located at the bottom center of the view with text ‘ id: 63283294
notifications view has a Button located at the bottom center of the view with text follow
view has actions which trigger on events, view should should error messages and display activity indicator when processing
the notifications view has a close icon located at the very-top right of the view which on click will trigger the close() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Navbar, NavItem, NavbarBrand, Button } from 'reactstrap';
        
        
        import { follow_action, follow_action, follow_action }  from '../actions/notificationsActions.js'; 

        import { get_follow_data, get_feed_data, get_notifications_data }  from '../actions/notificationsActions.js'; 
        
       
        class notificationsView extends React.Component {

            state = {
                 show_loading_indicator: false,
                
            }
    
            
            // follow event
            follow = (value) => {
                const { follow_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        follow_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // follow event
            follow = (value) => {
                const { follow_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        follow_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // follow event
            follow = (value) => {
                const { follow_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        follow_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }    
            
        get_follow_data = () => {

            return (
                <Col>
                <!-- ToDo: Refine template loop for get_follow_data -->
                </Col>
            )
        }
        
        get_feed_data = () => {

            return (
                <Col>
                <!-- ToDo: Refine template loop for get_feed_data -->
                </Col>
            )
        }
        
        get_notifications_data = () => {

            return (
                <Col>
                <!-- ToDo: Refine template loop for get_notifications_data -->
                </Col>
            )
        }
        

            componentDidMount = () => {
                const { get_follow_data, get_feed_data, get_notifications_data } = this.props
               
                ,,
            }
    
        render() {
        
         const { show_loading_indicator } = this.state
        const { data } = this.props

            return (
                <Row>

                {!data.error_message &&
                    show_loading_indicator === true ? <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> : 
                    <Col md={12}>

                        <Navbar color="light navigation-bar-light-turquoise-block" light expand="md"> 
    <NavbarBrand>recommendations x</NavbarBrand> 
</Navbar> 
			<Col md={12}>
				<p className="label-light-sky-blue-block"> h .j_°“n"_"3’3if. m </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for follow button-light-turquoise-light-sky-blue action --> */}
				<Button 
                        className="btn btn-lg btn-block button-light-turquoise-light-sky-blue" 
                        onClick={() => this.follow()}>follow</Button> 

			</Col>

			<Col md={12}>
				<p className="label-light-turquoise-light-sky-blue"> id: 34983294 w </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> alfred hodqes </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> samuel hammond </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for -.........._._..............._ﬁlm button-light-sky-blue-light-turquoise action --> */}
				<Button 
                        className="btn btn-lg btn-block button-light-sky-blue-light-turquoise" 
                        onClick={() => this.-.........._._..............._ﬁlm()}>-.......... . ............... ﬁlm</Button> 

			</Col>

			<Col md={12}>
				<p className="label-white-standard"> carolyn francis </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> id: 73748319 </p>
			</Col>

			<Col md={12} className="text-center">				{/* <!-- TODO: Change placeholder image with higher res --> */ }
				<img className="img-fluid" alt="Responsive image" src='http://path.to/replace/image' /> 

			</Col>			<Col md={12}>
				<p className="label-white-standard"> isaiah mcgee </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> mark holmes </p>
			</Col>

			<Col md={12}>
				<p className="label-block-white"> id: 13498384 </p>
			</Col>

			<Col md={12}>
				<p className="label-white-standard"> russell mcguire </p>
			</Col>

			<Col md={12}>
				<p className="label-block-lavender"> id: 63283294 </p>
			</Col>

			<Col md={12}>
				<p className="label-block-lavender"> 6 jonathan peters </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for vﬁ button-light-sky-blue-light-turquoise action --> */}
				<Button 
                        className="btn btn-lg btn-block button-light-sky-blue-light-turquoise" 
                        onClick={() => this.vﬁ()}>vﬁ</Button> 

			</Col>


                        {render_get_follow_data()}
{render_get_feed_data()}
{render_get_notifications_data()}
   
   
                    </Col> 
                     } 
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            return {
                    authentication: state.authentication,
                    data: state.notifications
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ follow_action, follow_action, follow_action get_follow_data, get_feed_data, get_notifications_data }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(notificationsView);
    
        