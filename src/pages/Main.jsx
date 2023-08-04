import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsClipboardCheck } from 'react-icons/bs';

function Main() {
	const navigate = useNavigate();
	return (
		<div className='flex flex-col my-10 justify-center items-center max-w-full'>
			<div className='flex flex-col justify-center items-center w-full'>
				<iframe
					src='https://giphy.com/embed/kFkDuCdGq5DJQQTL1X'
					width='380'
					height='380'
					className='giphy-embed'
					allowFullScreen
				></iframe>
				<p>
					<a href='https://giphy.com/gifs/hello-hi-hand-kFkDuCdGq5DJQQTL1X'></a>
				</p>

				<div className='flex flex-row items-center justify-center'>
					<span className='text-plum font-bold text-xl'>
						오늘의 할일을 적으러 가볼까요?
					</span>
					<button
						onClick={() => {
							navigate(`/todo`);
						}}
						className='cursor-pointer text-editButton hover:bg-BananaMania px-2 py-2 rounded-full'
					>
						<BsClipboardCheck className='font-bold text-2xl flex-shrink-0' />
					</button>
				</div>
			</div>
		</div>
	);
}
export default Main;
