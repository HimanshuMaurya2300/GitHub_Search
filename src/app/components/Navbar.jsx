import { Box, Button, Flex, useDisclosure } from '@/app/chakra'
import Image from 'next/image'
import GithubLogo from '/public/GitHub-logo.png'
import '../globals.css'
import HistoryModal from './HistoryModal'


const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex justifyContent={'space-between'} py={6} alignItems={"center"}>

            <Box position={'relative'} aspectRatio={5 / 3} minHeight={20}>

                <Image src={GithubLogo} fill alt='github logo' sx={{ filter: 'invert(1)' }} className='logo' />
            </Box>
            <Box>
                <Button size={"md"} colorScheme='purple' onClick={onOpen}>
                    Search History
                </Button>
            </Box>

            {isOpen && <HistoryModal isOpen={isOpen} onClose={onClose} />}

        </Flex>
    )
}

export default Navbar