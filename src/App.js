import './App.css';
import { Tree, TreeNode } from 'react-organizational-chart';
import Card from './Card';


const App = () => {
  return (
    <div className="App">
      <Tree label={<div>Root</div>}>
        <TreeNode label={<div>Child 1</div>}>
        </TreeNode>
        <TreeNode label={<div>Child 2</div>}>
          <TreeNode label={<Card />}>
            <TreeNode label={<Card />} />
            <TreeNode label={<Card />} />
            <TreeNode label={<Card />} />
          </TreeNode>
          <TreeNode label={<Card />} />
        </TreeNode>
      </Tree>
    </div>
  );
}

export default App;
