import { Button, Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { ADLaM_Display } from 'next/font/google';
export const textFont = ADLaM_Display({ weight: '400', subsets: ['latin'] });
interface Friend {
  name: string;
}

interface SelectFriendsProps {
  onSelectionChange: (selectedFriends: Friend[]) => void;
}

const AddFriends: React.FC<SelectFriendsProps> = ({ onSelectionChange }) => {
  const [friendName, setFriendName] = useState('');
  const [friends, setFriends] = useState<Friend[]>([]);
  const [selectedFriends, setSelectedFriends] = useState<Friend[]>([]);

  const handleFriendNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFriendName(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && friendName.trim() !== '') {
      const newFriend: Friend = { name: friendName.trim() };
      setFriends([...friends, newFriend]);
      setSelectedFriends([...selectedFriends, newFriend]);
      setFriendName('');
    }
  };

  const handleDeleteFriend = (friend: Friend) => {
    const updatedFriends = friends.filter(f => f !== friend);
    const updatedSelectedFriends = selectedFriends.filter(f => f !== friend);
    setFriends(updatedFriends);
    setSelectedFriends(updatedSelectedFriends);
  };

  useEffect(() => {
    onSelectionChange(selectedFriends);
  }, [selectedFriends, onSelectionChange]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2 justify-center">
        {selectedFriends.map((friend, index) => (
          <div key={index} className="relative">
            <Button
              variant="light"
              color="warning"
              className="text-xs bg-gray-200"
              onClick={() => handleDeleteFriend(friend)}
            >
              <p className={textFont.className}>{friend.name} x</p>
            </Button>
          </div>
        ))}
      </div>
      <Input
        label="Add Friends"
        type="text"
        color="default"
        value={friendName}
        onChange={handleFriendNameChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter friend's name and press Enter"
        className="w-full px-4 py-2 border rounded-md rounded-tr-3xl shadow-xl"
      />
    </div>
  );
};
export default AddFriends;
