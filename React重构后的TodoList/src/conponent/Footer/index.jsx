import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
	// 全选checkbox的回调
	handleCheckAll = event => {
		this.props.checkAllTodo(event.target.checked);
	};
	// 清除所有已经完成
	handleClearAllDone = () => {
		this.props.clearAllDone();
	};

	render() {
		const { todos } = this.props;
		// 已完成的个数
		const doneCount = todos.reduce((pre, cur) => {
			// cur就是todo
			return pre + (cur.done ? 1 : 0);
		}, 0);
		// 总数
		const total = todos.length;
		return (
			<div className="todo-footer">
				<label>
					<input
						type="checkbox"
						onChange={this.handleCheckAll}
						checked={doneCount === total && total !== 0}
					/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button className="btn btn-danger" onClick={this.handleClearAllDone}>
					清除已完成任务
				</button>
			</div>
		);
	}
}
