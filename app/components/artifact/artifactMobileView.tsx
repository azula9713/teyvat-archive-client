type Props = {
  artifactSet: IBaseArtifactSet;
};

export default function ArtifactMobileView({ artifactSet }: Props) {
  const { name } = artifactSet;
  return <div>{name}</div>;
}
