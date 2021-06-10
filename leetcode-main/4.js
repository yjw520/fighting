//二叉树的前序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 前序遍历
var preorderTraversal = (root) => {
    let result = []
    
    var preOrderTraverseNode = (node) => {
        if(node) {
            // 先根节点
            result.push(node.val)
            // 然后遍历左子树
            preOrderTraverseNode(node.left)
            // 再遍历右子树
            preOrderTraverseNode(node.right)
        }
    }
    preOrderTraverseNode(root)
    return result
};

console.log(preorderTraversal([1,null,2,3]));


// var preorderTraversal = function(root) {
//     let arr = [], res = []
//     root && arr.push(root)

//     while(arr.length > 0) {
//         let cur = arr.pop()
//         res.push(cur.val)

//         cur.right && arr.push(cur.right)
//         cur.left && arr.push(cur.left)
//     }
//     return res
// };
