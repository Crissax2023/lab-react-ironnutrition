import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={(e) => props.onSearch(e.target.value)} />
    </>
  );
}

export default Search;
