import { Colors } from "@/constants/Colors";
import { Alert, Text, TouchableOpacity, View } from "react-native";

type ShoppingListItemProps = {
  name: string;
};
export const ShoppingListItem = ({ name }: ShoppingListItemProps) => {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "It will be deleted permanently",
      [
        {
          text: "Yes",
          onPress: () => console.log(`Delete ${name}`),
          style: "destructive",
        },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };

  return (
    <View
      style={{
        borderColor: Colors.cerulean,
        padding: 10,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 200 }}>{name}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.black,
          borderRadius: 6,
          padding: 10,
        }}
        onPress={() => handleDelete()}
      >
        <Text style={{ color: Colors.white }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
