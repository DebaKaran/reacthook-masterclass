/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable no-empty-pattern */
import { useCallback, useState } from "react";

import Search from "./Search";

const allUsers = ["john", "alex", "george", "simon", "james"];

interface DemoProps {}

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function CallbackDemo({}: DemoProps) {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text: string) => {
    console.log(users[0]);

    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
