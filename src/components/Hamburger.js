
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,

} from '@chakra-ui/react'

const Hamburger = () => {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Menu
            className='hamburger'

        >
            <MenuButton
                as={IconButton}
                className='hamburger'
                aria-label='On Click'
                name='arrow-right'
                variant='outline'
                outline={'2px solid #F4CE14'}
            />
            <MenuList>
                <MenuItem as='a' href='/#about' onClick={handleClick('hero')}>
                    ABOUT
                </MenuItem>
                <MenuItem as='a' href='/#menu' onClick={handleClick('menu')}>
                    MENU
                </MenuItem>
                <MenuItem as='a' href='/booking'>
                    RESERVATIONS
                </MenuItem>
                <MenuItem>
                    ORDER ONLINE
                </MenuItem>
                <MenuItem as='a' href='/#contact' onClick={handleClick('contact')}>
                    CONTACT
                </MenuItem>
            </MenuList>

        </Menu>
    );

}
export default Hamburger;