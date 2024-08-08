
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,

} from '@chakra-ui/react'

const Hamburger = () => {
    return (
            <Menu
                className='hamburger'

            >
                <MenuButton
                    as={IconButton}
                    className='hamburger'
                    aria-label='Options'
                    name='arrow-right'
                    variant='outline'
                />
                <MenuList>
                    <MenuItem >
                        ABOUT
                    </MenuItem>
                    <MenuItem >
                        MENU
                    </MenuItem>
                    <MenuItem >
                        RESERVATIONS
                    </MenuItem>
                    <MenuItem>
                        ORDER ONLINE
                    </MenuItem>
                    <MenuItem>
                        LOGIN
                    </MenuItem>
                </MenuList>

            </Menu>
    );

}
export default Hamburger;