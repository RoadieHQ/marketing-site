# Legal notices

Legal notices, with the exception of the Terms of Service, are found under the `content/legal-notices/` directory.

## Types of legal notice

There are 5 main types of document:

1. The **Terms of Service** explain the contract that exists between Roadie and its customers.
2. The **Cookies Policy** explains the types of cookies we use and why, both on the website (roadie.io) and on the platform. The lists of cookies here must be updated everytime we add or remove a cookie on th website or platform.
3. The **Acceptable Use Policy** explains the acceptable ways that our customers may use the platform.
4. The **Privacy Policy** explains how off platform data is treated. For example, through CRMs or email.
5. **Sub Processors** are third parties that Roadie shares data with in order to provide the platform. This list must be updated every time we send platform data to a third party.

## Editing a legal notice

⚠️ Roadie must notify customers before making changes to various legal notices. Please read the Terms of Service thoroughly before publishing a change.

Legal notices are immutable and should never be changed. To alter a legal notice, duplicate the last version of the notice before making the change.

1. Find the latest version of the legal notice, as denoted by the file name. e.g. `v2.md`.
2. Copy the file and increment the version number. e.g. `v3.md`.
3. Make the change in the new version of the file.
4. Update the `lastUpdated` field in the file metadata.

By following this process, customers can use our website to go back and look at previous versions of our legal notices.

## Convenience URLs

The most recent version of each type of legal notice is available on a convenience URL such as [https://roadie.io/legal-notices/cookies-policy/](https://roadie.io/legal-notices/cookies-policy/). This URL renders the most recent version of the Cookies Policy.

The Terms and Privacy Policy each have an additional redirect URL defined in the `netlify.toml` file. These exist to support legacy URL schemes.
