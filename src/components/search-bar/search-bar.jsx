import { Search } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../constant/colors';
import Loader from '../loader/loader';

const SearchBar = () => {
	const [value, setValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const submitHandler = e => {
		e.preventDefault();
		setIsLoading(true);
		navigate(`/search/${value}`);
		setIsLoading(false);
		setValue('');
	};
	return (
		<Paper
			component={'form'}
			onSubmit={submitHandler}
			sx={{
				border: `1px solid ${colors.secondary}`,
				pl: 2,
				boxShadow: 'none',
				borderRadius: 'none',
				mr: 5,
			}}
		>
			<input
				type='text'
				placeholder='Search...'
				className='search__bar'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<IconButton type={'submit'} sx={{ p: '10px', color: colors.secondary }}>
				{isLoading ? <Loader /> : <Search />}
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
