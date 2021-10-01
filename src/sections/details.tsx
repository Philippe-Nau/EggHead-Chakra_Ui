import { FormControl,
     FormLabel,
     Input,
     Select,
     Checkbox,
     Button,
     VStack, 
     Heading,
     Text,
     SimpleGrid,
     GridItem,
     useBreakpointValue,
 } from "@chakra-ui/react";

const Details = () => {
    const  colSpan = useBreakpointValue({base: 2, md: 1});
    return <VStack w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
    >
        <VStack alignItems="flex-start" spacing={3}>
            <Heading size="2xl">Your details</Heading>
            <Text>If you already have an account, click here to log in.</Text>
        </VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={colSpan}>
                <FormControl>
                    <FormLabel>
                        First Name
                    </FormLabel>
                    <Input placeholder="John"/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
                <FormControl>
                    <FormLabel>
                        Last Name
                    </FormLabel>
                    <Input placeholder="Doe"/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
                <FormControl>
                    <FormLabel>
                        Address
                    </FormLabel>
                    <Input placeholder="Bivd. Broken Dreams 21"/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
                <FormControl>
                    <FormLabel>
                        City
                    </FormLabel>
                    <Input placeholder="San Francisco"/>
                </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
                <FormControl>
                    <FormLabel>
                        Country
                    </FormLabel>
                   <Select>
                       <option value="usa">United States of America</option>
                       <option value="uae">United Arab Emirates</option>
                       <option value="nmk">North Macedonia</option>
                       <option value="de">Germany</option>
                   </Select>
                </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
                <FormControl>
                    <Checkbox defaultChecked>Ship to the billing address</Checkbox>
                </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
                <Button variant='primary' size="lg" w="full">Place Order</Button>
            </GridItem>
        </SimpleGrid>
    </VStack>

}

export default Details;