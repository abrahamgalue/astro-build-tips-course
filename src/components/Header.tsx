interface Props {
	title: string;
}

function Header({ title }: Props) {
	return (
		<div className="mx-auto max-w-7xl p-4 py-8">
			<a href="/">
				<h1 className="mb-4">
					<span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent">
						{title}
					</span>
				</h1>
			</a>
		</div>
	);
}

export default Header;
