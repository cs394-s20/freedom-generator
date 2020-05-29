import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Menu, MenuItem } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import './Tabs.scss';


function Tabs(props) {
    var computeData = props.computeData;
    var criteria = props.criteria;
    console.log(window.screen.width);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            {window.screen.width > 412 ?
                <Grid className="tabs-fullscreen" direction="row">

                    {/* COMPONENT is EligibilityCriteria.js */}
                    <Link className="tabs-button" to={{
                        pathname: "/criteria" + "?computeData=" + JSON.stringify(computeData)
                    }}
                        target="_blank">
                        Eligibility Criteria
                    </Link>


                    {/* COMPONENT is ExampleEmail.js */}
                    <Link className="tabs-button" to={{
                        pathname: "/example"
                    }}
                        target="_blank">
                        Example Email
                    </Link>


                    {/* COMPONENT is FAQ.js */}
                    <Link className="tabs-button" to={{
                        pathname: "/faq"
                    }}
                        target="_blank">
                        FAQ
                    </Link>
                </Grid>
                :
                <div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Open Menu
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem >
                            <Link to={{
                                pathname: "/criteria" + "?computeData=" + JSON.stringify(computeData)
                            }}
                                target="_blank">
                                Eligibility Criteria
                            </Link>
                        </MenuItem>
                        <MenuItem >
                            <Link to={{
                                pathname: "/example"
                            }}
                                target="_blank">
                                Example Email
                            </Link>
                        </MenuItem>
                        <MenuItem >
                            <Link to={{
                                pathname: "/faq"
                            }}
                                target="_blank">
                                FAQ
                            </Link>
                        </MenuItem>
                    </Menu>
                </div>


            }


        </div>
    )

}

export default Tabs;