import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { ChatState } from "../../Context/ChatProvider";

const UserListItem = ({ user,handleFunction }) => {
    const box1Styles = {
        cursor: "pointer",
    backgroundColor: "#E8E8E8",
    _hover: {
      background: "#38B2AC",
      color: "white",
    },
    width: "100%",
    display: "flex",
    alignItems: "center",
    color: "black",
    paddingX: 3,
    paddingY: 2,
    marginBottom: 2,
    borderRadius: "lg",  
    };
  return (
    <Box
      style={box1Styles}
      onClick={handleFunction}
      
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;