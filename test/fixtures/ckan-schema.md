# BMGF&#39;s special metadatas

**(`object`)**

## Title

**(`string`)**

A descriptive name given to the Dataset. This should be an intuitive labelling of the Dataset for search, sharing and linking.

## Name

**(`string`)**

## Description

**(`string`)**

## Tags

**(`string`)**

What labels the Dataset in question belongs to. Tags also allow for browsing between similarly tagged Datasets in addition to enabling better discoverability through tag search.

## License

**(`string`)**

Licenses makes it clear to users whether they have the rights to use, change and re-distribute the data. Definitions and additional information can be found at &lt;a href=&quot;http://opendefinition.org/&quot; target=&quot;opendefinition.org&quot;&gt;http://opendefinition.org/&lt;/a&gt;.

## Organization

**(`string`)**

The Team to which the Dataset belongs.

## Information classification

**(`string`)**

BMGF &lt;a href=&quot;https://bmgf.sharepoint.com/:w:/r/sites/AzureCoP/_layouts/15/Doc.aspx?sourcedoc=%7BFFAA18FA-5297-45BE-B083-05BA6F5E925E%7D&amp;file=Governance%20and%20Security%20-%20Information%20Classification%20Standard.docx&amp;action=default&amp;mobileredirect=true&quot; target=&quot;bmgf_pii&quot;&gt;Information Classification Standard&lt;/a&gt;.

### Examples

- `{"information_classification":"public-public-external"}`

- `{"information_classification":"not_sensitive-non_confidential-internal-business"}`

- `{"information_classification":"not_sensitive-non_confidential-internal_limited_external-business"}`

- `{"information_classification":"sensitive-confidential-internal_restricted-business"}`

- `{"information_classification":"sensitive-confidential_third_party-internal_restricted-agreement"}`

- `{"information_classification":"sensitive-regulated-internal_restricted-regulation"}`

- `{"information_classification":"very_sensitive-highly_regulated-internal_highly_restricted-regulation"}`

## Visibility

**(`string`)**

The accessibility setting for the Dataset’s Resources, users can choose between the following: &lt;/br&gt; &lt;ul&gt;&lt;li&gt;&lt;b&gt;Public&lt;/b&gt;: Dataset’s Resources can be accessed by all users within the Foundation.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Restricted:&lt;/b&gt; Restricted Datasets are visible to all foundation Users but can only be Explored (previewed or downloaded) by Members of the Team that the Dataset is associated with or Users that are Collaborators of the Dataset.&lt;/li&gt;&lt;/ul&gt;

### Examples

- `{"visibility":"restricted"}`

- `{"visibility":"public"}`

## Visibility (Private/Public)

**(`string`)**

HELP TEXT FOR VISIBILITY

## Maintainer

**(`string`)**

The individual responsible for maintaining the Dataset.

## Maintainer

**(`string`)**

## Publisher

**(`string`)**

An entity responsible for making the Dataset available. Examples of a Publisher include a person, an organization, or a service.

## Temporal coverage

**(`string`)**

The temporal topic of the Dataset. Temporal topic may be a named period, date, or date range.

## Geographic coverage

**(`string`)**

Geographical area where data was collected or place which is the subject of a collection, or a location which is the focus of the Dataset.

## Geographic level

**(`string`)**

The lowest level-of-detail/granularity of the Dataset along the geographic dimension.

### Examples

- `{"geographic_level":"global"}`

- `{"geographic_level":"regional"}`

- `{"geographic_level":"national"}`

- `{"geographic_level":"sub_national"}`

- `{"geographic_level":"other"}`

## Language

**(`string`)**

The language(s) of the Dataset.

## URL

**(`string`)**

## Type

**(`string`)**

The nature or genre of the Dataset. Users can choose between the following:&lt;/br&gt; &lt;ul&gt;&lt;li&gt;&lt;b&gt;Survey:&lt;/b&gt; An investigation about the characteristics of a given population by means of collecting data from a sample of that population.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Indicator: &lt;/b&gt;Data that represents the measurement of something (e.g., GDP, Vaccination Rates).&lt;/li&gt;&lt;li&gt;&lt;b&gt;Raw data:&lt;/b&gt; Data coming directly from original data source or partner. Does not include any transformation.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Reference data:&lt;/b&gt; A standard set of curated data that serve as the foundation for the IPM model.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Modeled Estimates:&lt;/b&gt; Results that are outputs of a specific model.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Geospatial: &lt;/b&gt;A spatial dataset or service.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Other:&lt;/b&gt; Data that does not align with the other definitions.&lt;/li&gt;&lt;/ul&gt;

### Examples

- `{"dataset_type":"survey"}`

- `{"dataset_type":"indicator"}`

- `{"dataset_type":"raw_data"}`

- `{"dataset_type":"reference_data"}`

- `{"dataset_type":"modeled_estimates"}`

- `{"dataset_type":"geospatial"}`

- `{"dataset_type":"other"}`

## Version

**(`string`)**

## Methodology

**(`string`)**

Methodology of how data was collected, created and/or any transformations performed on the data.

## Date of dataset

**(`string`)**

Date that the Dataset was created (not uploaded). Format is mm/dd/yyyy.

## Expected date of next refresh

**(`string`)**

## Expected update frequency

**(`string`)**

### Examples

- `{"expected_update_frequency":"weekly"}`

- `{"expected_update_frequency":"monthly"}`

- `{"expected_update_frequency":"semi_annually"}`

- `{"expected_update_frequency":"annually"}`

- `{"expected_update_frequency":"ad_hoc"}`

- `{"expected_update_frequency":"other"}`

## Usage notes

**(`string`)**

Specific usage instructions on how the data in this Dataset should be used, any known issues with the data, and/or any other information that a user of the data might find helpful.

## Investment ID

**(`string`)**

Used to store unique source system identifiers that come from a past, present or future investment system (e.g. opp1234).

## Internal point of contact

**(`string`)**

Primary point of contact within the Foundation for the Dataset.

## Locked

**(`string`)**

## Contains Personal Data?

**(`string`)**

Personal data is not currently supported in the Gates Data Exchange

### Example

- `{"data_privacy_regulated":"false"}`

## Country of Origin

**(`string`)**

Multiple values are allowed. Use Ctrl + Click to select or de-select multiple values.

## US State of Origin

**(`string`)**

Multiple values are allowed. Use Ctrl + Click to select or de-select multiple values.

## Canada Province of Origin

**(`string`)**

Multiple values are allowed. Use Ctrl + Click to select or de-select multiple values.

## Data Sharing Agreement URL

**(`string`)**

## Data Expiration Date

**(`string`)**

Format is mm/dd/yyyy

## Remote dataset id

**(`string`)**

## Harvest source id

**(`string`)**

## Harvest source url

**(`string`)**

## Harvest source title

**(`string`)**

## Harvest timestamp

**(`string`)**

## Description

**(`string`)**

## Format

**(`string`)**

## File Encoding Type

**(`string`)**

### Examples

- `{"file_encoding_type":"utf_8"}`

- `{"file_encoding_type":"iso_8859_1"}`

- `{"file_encoding_type":"windows_1251"}`

- `{"file_encoding_type":"windows_1252"}`

- `{"file_encoding_type":"shift_jis"}`

- `{"file_encoding_type":"gb2312"}`

- `{"file_encoding_type":"euc_kr"}`

- `{"file_encoding_type":"iso_8859_2"}`

- `{"file_encoding_type":"windows_1250"}`

- `{"file_encoding_type":"euc_jp"}`

- `{"file_encoding_type":"gbk"}`

- `{"file_encoding_type":"big5"}`

- `{"file_encoding_type":"iso_8859_15"}`

- `{"file_encoding_type":"windows_1256"}`

- `{"file_encoding_type":"iso_8859_9"}`
