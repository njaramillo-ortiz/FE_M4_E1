import { Menu, MenuItem, Segment } from "semantic-ui-react";

export function Navbar(props)
{
    return(
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%"
            }}
        >
            <Segment
                inverted
                attached="top"
            >
                <Menu
                    inverted
                    secondary
                >
                    <MenuItem>
                        Test
                    </MenuItem>
                    <MenuItem
                        position="right"
                    >
                        Bla
                    </MenuItem>
                </Menu>
            </Segment>
        </div>
    );
}