import {
	Checkroom,
	DeveloperMode,
	FaceRetouchingNatural,
	FitnessCenter,
	GraphicEq,
	Home,
	LiveTv,
	MusicNote,
	OndemandVideo,
	School,
	SportsEsports,
	TheaterComedy,
} from '@mui/icons-material';

export const logo =
	'https://api.eu.kaltura.com/p/115/sp/11500/raw/entry_id/0_3bouoc0k/version/100002';

export const category = [
	{ name: 'New', icon: <Home /> },
	{ name: 'Movie', icon: <OndemandVideo /> },
	{ name: 'Live', icon: <LiveTv /> },
	{ name: 'Gaming', icon: <SportsEsports /> },
	{ name: 'Education', icon: <School /> },
	{ name: 'Sport', icon: <FitnessCenter /> },
	{ name: 'Comedy', icon: <TheaterComedy /> },
	{ name: 'Podcast', icon: <GraphicEq /> },
	{ name: 'Fashion', icon: <Checkroom /> },
	{ name: 'Crypto', icon: <DeveloperMode /> },
	{ name: 'Gym', icon: <FitnessCenter /> },
	{ name: 'Beauty', icon: <FaceRetouchingNatural /> },
	{ name: 'Music', icon: <MusicNote /> },
];
