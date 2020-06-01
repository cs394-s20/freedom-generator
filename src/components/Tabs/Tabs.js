import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Menu, MenuItem } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import '../../styles/styles.scss';
import MenuIcon from '@material-ui/icons/Menu';


function Tabs(props) {
    var computeData = props.computeData;
    var criteria = props.criteria;
    console.log(window.screen.width);
    const [screenWidth, setScreenWidth] = useState(document.body.clientWidth);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    window.addEventListener("resize", (event) => {
        setScreenWidth(document.body.clientWidth);
    })


    return (
        <div>
            {screenWidth > 550 ?
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
                    <Button className="menu-button" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon fontSize="large" />
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem >
                            <Link className="menu-button" to={{
                                pathname: "/criteria" + "?computeData=" + JSON.stringify(computeData)
                            }}
                                target="_blank">
                                Eligibility Criteria
                            </Link>
                        </MenuItem>
                        <MenuItem >
                            <Link className="menu-button" to={{
                                pathname: "/example"
                            }}
                                target="_blank">
                                Example Email
                            </Link>
                        </MenuItem>
                        <MenuItem >
                            <Link className="menu-button" to={{
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