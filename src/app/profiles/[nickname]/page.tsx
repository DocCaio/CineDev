interface Props {
  params: {nickname: string};
  searchParams: {lang: string};
}

export default function ProfileDetails({params, searchParams}: Props) {
  return (
    <>
      <h1 className="text-xl font-bold">
        Perfil: {params.nickname} (Idioma: {searchParams.lang})
      </h1>
    </>
  );
}
