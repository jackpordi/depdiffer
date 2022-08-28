enum VersionChange {
  ADDITION,
  MAJOR_UPGRADE,
  MINOR_UPGRADE,
  PATCH_UPGRADE,
  MAJOR_DOWNGRADE,
  MINOR_DOWNGRADE,
  PATCH_DOWNGRADE,
  REMOVAL,
}

enum VersionLock {
  APPROX,
  COMPAT,
}

class SemVer {
  public constructor(
    public readonly major: number,
    public readonly minor: number,
    public readonly patch: number,
    public readonly modifier?: VersionLock,
  ) {}
}
