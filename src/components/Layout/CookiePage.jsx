import {Box, Link, Typography} from '@mui/material';

const CookiePage = () => {
 return (
  <Box
   sx={{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 5,
    backgroundColor: 'bisque',
    padding: 2,
   }}
  >
   <Typography
    variant="h5"
    color={'primary'}
   >
    Cookies
   </Typography>
   <Link
    href="/"
    sx={{color: 'green'}}
    variant="caption"
   >
    Home
   </Link>
   <Typography
    variant="body1"
    fontSize={10}
   >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.
    <br />
    Quam elementum pulvinar etiam non quam lacus suspendisse. Ultricies leo
    integer malesuada nunc vel. Risus pretium quam vulputate dignissim
    suspendisse in est ante in. Est sit amet facilisis magna. Ut tellus
    elementum sagittis vitae et leo duis ut. Massa tincidunt nunc pulvinar
    sapien et ligula ullamcorper malesuada. In metus vulputate eu
    scelerisque felis imperdiet proin fermentum leo. Etiam erat velit
    scelerisque in dictum non consectetur a. Massa eget egestas purus
    viverra accumsan in nisl nisi scelerisque. Odio facilisis mauris sit
    amet. Eget aliquet nibh praesent tristique magna sit amet. Adipiscing
    elit ut aliquam purus. Urna id volutpat lacus laoreet non curabitur
    gravida arcu. Nullam ac tortor vitae purus. In metus vulputate eu
    scelerisque felis imperdiet. Viverra justo nec ultrices dui sapien eget
    mi. Sed blandit libero volutpat sed cras ornare arcu dui. Aliquam etiam
    erat velit scelerisque in. Vestibulum lorem sed risus ultricies
    tristique nulla aliquet enim. Mattis enim ut tellus elementum sagittis
    vitae et leo duis.
   </Typography>
  </Box>
 );
};
export default CookiePage;