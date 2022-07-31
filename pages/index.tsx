import { NextPageWithLayout } from ".";
import WithHeaderLayout from "../layout/WithHeaderLayout";
import { Box, Container } from "@mui/material";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(120)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </>
  );
};

Home.getLayout = (page) => {
  return <WithHeaderLayout>{page}</WithHeaderLayout>;
};

export default Home;
