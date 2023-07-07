import { Box, Button, Flex, useDisclosure } from '@/app/chakra'
import Image from 'next/image'
import '../globals.css'
import HistoryModal from './HistoryModal'


const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex justifyContent={'space-between'} py={6} alignItems={"center"}>

            <Box position={'relative'} aspectRatio={5 / 3} minHeight={20}>
                {/* <Image src={"/Github-logo.png"} fill alt='github logo' sx={{ filter: 'invert(1)' }} /> */}

                <Image src={"/Github-logo.png"} fill alt='github logo' sx={{ filter: 'invert(1)' }} className='logo' />
            </Box>
            <Box>
                <Button size={"md"} colorScheme='whatsapp' onClick={onOpen}>
                    Search History
                </Button>
            </Box>

            {isOpen && <HistoryModal isOpen={isOpen} onClose={onClose} />}

        </Flex>
    )
}

export default Navbar