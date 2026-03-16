// ── Dataset master catalogue ───────────────────────────────────────────────
// All datasets sourced or inspired by data.gov.pk, PBS, SBP, NHSRC, ECP, etc.

export const datasets = [
  // ── BUSINESS & ECONOMY ─────────────────────────────────────────────────
  {
    id: 'pbs-gdp-quarterly',
    title: 'Pakistan Quarterly GDP Growth Rate',
    slug: 'pakistan-quarterly-gdp-growth-rate',
    category: 'business-economy',
    categoryLabel: 'Business and Economy',
    publisher: 'Pakistan Bureau of Statistics',
    publisherSlug: 'pakistan-bureau-of-statistics',
    description: 'Quarterly estimates of Pakistan\'s Gross Domestic Product (GDP) at constant and current prices, including sectoral breakdown across agriculture, industry, and services.',
    longDescription: 'This dataset provides quarterly national accounts data for Pakistan, compiled in accordance with the System of National Accounts (SNA 2008). It includes GDP at market prices, GDP by expenditure approach, and GDP by economic activity for both public and private sectors. Data is rebased to 2015-16 constant prices.',
    updateFrequency: 'Quarterly',
    lastUpdated: '2024-12-15',
    coverage: '2010–2024',
    formats: ['CSV', 'XLSX', 'JSON'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['GDP', 'economic growth', 'national accounts', 'quarterly'],
    featured: true,
    downloads: 14820,
    apiAvailable: true,
    source: 'https://www.pbs.gov.pk',
    previewData: {
      headers: ['Quarter', 'GDP (PKR Billion)', 'Growth Rate (%)', 'Sector'],
      rows: [
        ['Q1 2024-25', '14,832', '2.51', 'Overall'],
        ['Q4 2023-24', '14,453', '3.10', 'Overall'],
        ['Q3 2023-24', '13,977', '2.89', 'Overall'],
        ['Q2 2023-24', '13,540', '1.72', 'Overall'],
        ['Q1 2023-24', '12,963', '-0.22', 'Overall'],
      ]
    }
  },
  {
    id: 'sbp-exchange-rates',
    title: 'State Bank of Pakistan Daily Exchange Rates',
    slug: 'sbp-daily-exchange-rates',
    category: 'business-economy',
    categoryLabel: 'Business and Economy',
    publisher: 'State Bank of Pakistan',
    publisherSlug: 'state-bank-of-pakistan',
    description: 'Daily inter-bank and open-market foreign exchange rates for PKR against major world currencies including USD, EUR, GBP, SAR, AED, and CNY.',
    longDescription: 'Published daily by the State Bank of Pakistan, this dataset contains official exchange rate data used for monetary policy, banking regulation, and international trade. Includes both buying and selling rates for the inter-bank market and the open market.',
    updateFrequency: 'Daily',
    lastUpdated: '2025-03-14',
    coverage: '2000–Present',
    formats: ['CSV', 'JSON', 'XML', 'API'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['exchange rates', 'forex', 'currency', 'monetary policy'],
    featured: true,
    downloads: 28440,
    apiAvailable: true,
    source: 'https://www.sbp.org.pk',
    previewData: {
      headers: ['Date', 'USD/PKR', 'EUR/PKR', 'GBP/PKR', 'SAR/PKR'],
      rows: [
        ['14-Mar-2025', '278.25', '302.14', '353.89', '74.20'],
        ['13-Mar-2025', '277.98', '301.87', '353.55', '74.13'],
        ['12-Mar-2025', '278.10', '302.02', '353.71', '74.17'],
        ['11-Mar-2025', '277.75', '301.55', '353.22', '74.07'],
        ['10-Mar-2025', '277.60', '301.33', '353.01', '74.01'],
      ]
    }
  },
  {
    id: 'pbs-cpi-inflation',
    title: 'Consumer Price Index (CPI) and Inflation Data',
    slug: 'consumer-price-index-inflation',
    category: 'business-economy',
    categoryLabel: 'Business and Economy',
    publisher: 'Pakistan Bureau of Statistics',
    publisherSlug: 'pakistan-bureau-of-statistics',
    description: 'Monthly CPI data measuring price changes for goods and services consumed by households. Includes urban/rural breakdown and category-wise price indices.',
    longDescription: 'The CPI measures changes in the price level of a representative basket of consumer goods and services. PBS compiles this data from 35 urban and rural centres across Pakistan. Categories include food & beverages, housing, clothing, transport, education, and health.',
    updateFrequency: 'Monthly',
    lastUpdated: '2025-02-28',
    coverage: '2005–Present',
    formats: ['CSV', 'XLSX'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['inflation', 'CPI', 'prices', 'cost of living'],
    featured: false,
    downloads: 9230,
    apiAvailable: false,
    source: 'https://www.pbs.gov.pk',
    previewData: {
      headers: ['Month', 'CPI General', 'Urban CPI', 'Rural CPI', 'Food CPI'],
      rows: [
        ['Feb 2025', '183.24', '181.09', '185.72', '192.30'],
        ['Jan 2025', '181.98', '179.87', '184.29', '190.88'],
        ['Dec 2024', '180.51', '178.44', '182.83', '189.14'],
        ['Nov 2024', '179.15', '177.11', '181.43', '187.72'],
        ['Oct 2024', '177.88', '175.88', '180.09', '186.31'],
      ]
    }
  },
  {
    id: 'mof-federal-budget',
    title: 'Federal Budget 2024-25 – Detailed Estimates',
    slug: 'federal-budget-2024-25',
    category: 'government-spending',
    categoryLabel: 'Government Spending',
    publisher: 'Ministry of Finance',
    publisherSlug: 'ministry-of-finance',
    description: 'Complete breakdown of federal government revenue and expenditure estimates for fiscal year 2024-25 including PSDP allocations, debt servicing, and defence spending.',
    longDescription: 'The Federal Budget provides a comprehensive account of government finances. This dataset includes current expenditures by ministry, development expenditure under PSDP, tax revenue forecasts, non-tax receipts, and provincial transfers under NFC Award. Data is provided at the grant and appropriation level.',
    updateFrequency: 'Annual',
    lastUpdated: '2024-06-12',
    coverage: 'FY2019-20 – FY2024-25',
    formats: ['CSV', 'XLSX', 'PDF'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['budget', 'fiscal policy', 'government spending', 'PSDP'],
    featured: true,
    downloads: 19870,
    apiAvailable: false,
    source: 'https://www.finance.gov.pk',
    previewData: {
      headers: ['Ministry/Division', 'Budget 2023-24 (PKR M)', 'Budget 2024-25 (PKR M)', 'Change (%)'],
      rows: [
        ['Ministry of Finance', '8,012,450', '9,775,000', '+21.98'],
        ['Ministry of Defence', '1,800,000', '2,122,000', '+17.89'],
        ['Ministry of Education', '97,400', '118,600', '+21.77'],
        ['Ministry of Health', '84,200', '101,300', '+20.31'],
        ['PSDP (Development)', '1,150,000', '1,400,000', '+21.74'],
      ]
    }
  },

  // ── EDUCATION ─────────────────────────────────────────────────────────
  {
    id: 'aser-school-enrollment',
    title: 'Pakistan School Enrollment and Literacy Survey',
    slug: 'pakistan-school-enrollment-literacy',
    category: 'education',
    categoryLabel: 'Education',
    publisher: 'Ministry of Education',
    publisherSlug: 'ministry-of-education',
    description: 'District-level data on school enrollment rates, literacy rates, and out-of-school children across all provinces and territories.',
    longDescription: 'Compiled from the Annual School Census and ASER Pakistan survey, this dataset provides granular information on gross and net enrollment ratios by gender, grade level, and district. It tracks progress towards SDG 4 targets and informs ESSER and education planning at the provincial level.',
    updateFrequency: 'Annual',
    lastUpdated: '2024-08-20',
    coverage: '2015–2024',
    formats: ['CSV', 'XLSX', 'JSON'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['education', 'enrollment', 'literacy', 'schools', 'SDG4'],
    featured: true,
    downloads: 7650,
    apiAvailable: false,
    source: 'https://www.mofept.gov.pk',
    previewData: {
      headers: ['Province', 'Primary NER (%)', 'Middle NER (%)', 'Literacy Rate (%)', 'Out-of-School (M)'],
      rows: [
        ['Punjab', '77.4', '54.2', '64.7', '5.2'],
        ['Sindh', '63.8', '42.1', '55.4', '7.1'],
        ['KPK', '75.1', '51.8', '60.3', '3.4'],
        ['Balochistan', '56.2', '35.7', '41.2', '4.8'],
        ['AJK', '88.3', '68.4', '74.9', '0.3'],
      ]
    }
  },
  {
    id: 'hec-universities',
    title: 'HEC Recognised Universities and Institutes – Pakistan',
    slug: 'hec-recognised-universities',
    category: 'education',
    categoryLabel: 'Education',
    publisher: 'Higher Education Commission',
    publisherSlug: 'higher-education-commission',
    description: 'List of all HEC-recognised degree-awarding institutions in Pakistan with sector, province, type, affiliation status, and student enrollment data.',
    longDescription: 'This dataset contains the complete registry of 246 HEC-recognised universities and degree awarding institutions in Pakistan. Includes public sector, private sector, and foreign-affiliated universities. Data includes geographic location, accreditation status, faculty strength, and enrolled student numbers by gender.',
    updateFrequency: 'Semi-Annual',
    lastUpdated: '2025-01-15',
    coverage: '2010–Present',
    formats: ['CSV', 'XLSX', 'JSON'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['universities', 'higher education', 'HEC', 'accreditation'],
    featured: false,
    downloads: 5420,
    apiAvailable: true,
    source: 'https://www.hec.gov.pk',
    previewData: {
      headers: ['Institution', 'Province', 'Sector', 'Students', 'Status'],
      rows: [
        ['University of Karachi', 'Sindh', 'Public', '24,000', 'W-Category'],
        ['LUMS', 'Punjab', 'Private', '5,800', 'W-Category'],
        ['NUST', 'Islamabad', 'Public', '18,200', 'W-Category'],
        ['Quaid-i-Azam University', 'Islamabad', 'Public', '14,500', 'W-Category'],
        ['COMSATS University', 'Punjab', 'Public', '32,000', 'W-Category'],
      ]
    }
  },

  // ── HEALTH ─────────────────────────────────────────────────────────────
  {
    id: 'nhsrc-health-facilities',
    title: 'National Health Facilities Registry – Pakistan',
    slug: 'national-health-facilities-registry',
    category: 'health',
    categoryLabel: 'Health',
    publisher: 'National Health Services, Regulations and Coordination',
    publisherSlug: 'nhsrc',
    description: 'Comprehensive registry of all public and private health facilities in Pakistan including hospitals, BHUs, RHCs, mother & child health centres, and dispensaries.',
    longDescription: 'The National Health Facilities Registry (NHFR) provides a complete inventory of health facilities at the district and tehsil level. This includes facility type, ownership, number of beds, available services, geographic coordinates, and operational status. Data is critical for healthcare planning, resource allocation, and the Universal Health Coverage assessment.',
    updateFrequency: 'Quarterly',
    lastUpdated: '2024-11-30',
    coverage: 'All Provinces and Territories',
    formats: ['CSV', 'XLSX', 'JSON', 'API'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['health facilities', 'hospitals', 'primary care', 'UHC'],
    featured: true,
    downloads: 11320,
    apiAvailable: true,
    source: 'https://nhsrc.gov.pk',
    previewData: {
      headers: ['Facility Name', 'Type', 'Province', 'District', 'Beds'],
      rows: [
        ['Jinnah Postgraduate Medical Centre', 'Tertiary Hospital', 'Sindh', 'Karachi', '1,850'],
        ['Services Hospital Lahore', 'Tertiary Hospital', 'Punjab', 'Lahore', '1,400'],
        ['Lady Reading Hospital', 'Tertiary Hospital', 'KPK', 'Peshawar', '1,200'],
        ['Quetta Civil Hospital', 'District Hospital', 'Balochistan', 'Quetta', '800'],
        ['PIMS Islamabad', 'Tertiary Hospital', 'ICT', 'Islamabad', '1,100'],
      ]
    }
  },
  {
    id: 'pbs-health-survey',
    title: 'Pakistan Demographic and Health Survey (PDHS) Microdata',
    slug: 'pakistan-demographic-health-survey',
    category: 'health',
    categoryLabel: 'Health',
    publisher: 'Pakistan Bureau of Statistics',
    publisherSlug: 'pakistan-bureau-of-statistics',
    description: 'Nationally representative household survey covering maternal health, child nutrition, immunisation coverage, fertility rates, and health service utilisation.',
    longDescription: 'Conducted every 5 years with support from USAID, the PDHS provides nationally and provincially representative data on population, health, and nutrition. It is the primary source for monitoring SDG 3 indicators in Pakistan. This dataset includes anonymised microdata for academic and policy research.',
    updateFrequency: 'Every 5 years',
    lastUpdated: '2022-12-01',
    coverage: '2006, 2012-13, 2017-18, 2022',
    formats: ['CSV', 'SPSS', 'STATA'],
    license: 'DHS Programme Open Data Licence',
    tags: ['DHS', 'maternal health', 'child health', 'nutrition', 'immunisation'],
    featured: false,
    downloads: 6780,
    apiAvailable: false,
    source: 'https://dhsprogram.com/pakistan',
    previewData: {
      headers: ['Indicator', '2006', '2012-13', '2017-18', '2022'],
      rows: [
        ['Under-5 Mortality (per 1,000)', '97', '89', '74', '67'],
        ['Maternal Mortality Ratio', '276', '261', '186', '154'],
        ['Stunting Prevalence (%)', '41.5', '45.0', '40.2', '37.6'],
        ['DPT3 Immunisation Coverage (%)', '54', '73', '74', '82'],
        ['ANC 4+ Visits (%)', '28', '37', '50', '61'],
      ]
    }
  },

  // ── SOCIETY & POPULATION ───────────────────────────────────────────────
  {
    id: 'pbs-census-2023',
    title: 'Pakistan Population and Housing Census 2023',
    slug: 'pakistan-census-2023',
    category: 'society-population',
    categoryLabel: 'Society and Population',
    publisher: 'Pakistan Bureau of Statistics',
    publisherSlug: 'pakistan-bureau-of-statistics',
    description: 'Full results of the 7th Population and Housing Census of Pakistan. District-level population counts by gender, urban/rural, religion, and household characteristics.',
    longDescription: 'The 7th Population and Housing Census conducted in 2023 is the most comprehensive count of Pakistan\'s population and living conditions since 1998. This dataset includes final headcounts at district, tehsil, and union council levels, household size distributions, urbanisation rates, and housing stock data. It is the authoritative reference for electoral delimitation, resource allocation, and development planning.',
    updateFrequency: 'Every 10 years',
    lastUpdated: '2023-08-05',
    coverage: 'National – All 154 Districts',
    formats: ['CSV', 'XLSX', 'PDF', 'JSON'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['census', 'population', 'housing', 'demographics', '2023'],
    featured: true,
    downloads: 42500,
    apiAvailable: true,
    source: 'https://www.pbs.gov.pk',
    previewData: {
      headers: ['Province/Territory', 'Population 2023', 'Male', 'Female', 'Urban (%)'],
      rows: [
        ['Punjab', '127,688,922', '64,815,231', '62,873,691', '41.2'],
        ['Sindh', '55,695,563', '28,801,455', '26,894,108', '57.8'],
        ['KPK (incl. merged)', '40,525,047', '20,982,144', '19,542,903', '23.1'],
        ['Balochistan', '14,894,402', '7,641,512', '7,252,890', '28.3'],
        ['ICT Islamabad', '2,363,279', '1,238,908', '1,124,371', '66.4'],
      ]
    }
  },
  {
    id: 'bisp-beneficiary',
    title: 'Benazir Income Support Programme (BISP) Beneficiary Data',
    slug: 'bisp-beneficiary-data',
    category: 'society-population',
    categoryLabel: 'Society and Population',
    publisher: 'Benazir Income Support Programme',
    publisherSlug: 'bisp',
    description: 'Anonymised district-level data on BISP cash transfer beneficiaries, payment amounts, poverty scores, and coverage by gender and province.',
    longDescription: 'BISP is Pakistan\'s largest social safety net programme covering over 9 million beneficiary families. This aggregated dataset provides district-level counts of active beneficiaries, total disbursements, National Socio-Economic Registry (NSER) poverty scores distribution, and programme reach by gender. Individual microdata is not included to protect beneficiary privacy.',
    updateFrequency: 'Quarterly',
    lastUpdated: '2024-12-31',
    coverage: 'All Districts – 2008 to Present',
    formats: ['CSV', 'XLSX'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['social protection', 'poverty', 'cash transfers', 'BISP', 'women'],
    featured: false,
    downloads: 8910,
    apiAvailable: false,
    source: 'https://bisp.gov.pk',
    previewData: {
      headers: ['Province', 'Active Beneficiaries', 'Quarterly Disbursement (PKR M)', 'Female %'],
      rows: [
        ['Punjab', '4,822,115', '28,932', '97.8'],
        ['Sindh', '2,104,330', '12,626', '97.5'],
        ['KPK', '1,341,200', '8,047', '97.1'],
        ['Balochistan', '812,440', '4,875', '96.9'],
        ['GB + AJK', '198,320', '1,190', '97.4'],
      ]
    }
  },

  // ── ENVIRONMENT ────────────────────────────────────────────────────────
  {
    id: 'pmd-climate-data',
    title: 'Pakistan Meteorological Department – Climate and Rainfall Data',
    slug: 'pmd-climate-rainfall-data',
    category: 'environment',
    categoryLabel: 'Environment',
    publisher: 'Pakistan Meteorological Department',
    publisherSlug: 'pmd',
    description: 'Historical and real-time weather observations from 100+ meteorological stations across Pakistan. Includes temperature, precipitation, humidity, and extreme weather events.',
    longDescription: 'Compiled from the network of Pakistan Meteorological Department observatories, this dataset provides daily and monthly weather records since 1901 for selected stations. It includes maximum/minimum temperatures, rainfall, wind speed, humidity, sunshine hours, and occurrence of extreme events (heatwaves, floods, droughts). Essential for climate change research, agriculture planning, and disaster risk reduction.',
    updateFrequency: 'Daily',
    lastUpdated: '2025-03-14',
    coverage: '1901–Present | 100+ Stations',
    formats: ['CSV', 'JSON', 'NetCDF'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['climate', 'weather', 'rainfall', 'temperature', 'meteorology'],
    featured: false,
    downloads: 16300,
    apiAvailable: true,
    source: 'https://www.pmd.gov.pk',
    previewData: {
      headers: ['Station', 'Province', 'Avg Temp (°C)', 'Annual Rainfall (mm)', 'Elevation (m)'],
      rows: [
        ['Karachi', 'Sindh', '26.5', '196', '22'],
        ['Lahore', 'Punjab', '24.2', '510', '214'],
        ['Islamabad', 'ICT', '22.8', '1,143', '508'],
        ['Quetta', 'Balochistan', '14.6', '243', '1,676'],
        ['Peshawar', 'KPK', '22.6', '371', '327'],
      ]
    }
  },

  // ── GOVERNMENT ─────────────────────────────────────────────────────────
  {
    id: 'ecp-election-results',
    title: 'Election Commission of Pakistan – General Election Results 2024',
    slug: 'ecp-general-election-results-2024',
    category: 'government',
    categoryLabel: 'Government',
    publisher: 'Election Commission of Pakistan',
    publisherSlug: 'election-commission-of-pakistan',
    description: 'Official constituency-level results of the 2024 General Elections including votes received by each candidate, registered voters, voter turnout, and party affiliations.',
    longDescription: 'The official electoral data from the February 2024 General Elections covers all 266 National Assembly constituencies and 593 Provincial Assembly constituencies. Data includes candidate-wise vote counts, party affiliations, rejected votes, turnout percentages, and winner declarations. This is the authoritative source for electoral analysis and research.',
    updateFrequency: 'Per election cycle',
    lastUpdated: '2024-02-29',
    coverage: 'General Elections 2024 – All Constituencies',
    formats: ['CSV', 'XLSX', 'PDF'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['elections', 'voting', 'democracy', 'constituencies', '2024'],
    featured: true,
    downloads: 33210,
    apiAvailable: false,
    source: 'https://www.ecp.gov.pk',
    previewData: {
      headers: ['Constituency', 'Winner', 'Party', 'Votes Won', 'Turnout (%)'],
      rows: [
        ['NA-1 Chitral', 'Molana Abdul Akbar', 'JUI-F', '52,341', '48.2'],
        ['NA-47 Islamabad-I', 'Raja Khurram Nawaz', 'PML-N', '98,445', '52.7'],
        ['NA-75 Sialkot-I', 'Khawaja Asif', 'PML-N', '1,14,782', '55.3'],
        ['NA-127 Lahore-XI', 'Aleem Khan', 'PML-N', '89,320', '51.8'],
        ['NA-246 Karachi-XIII', 'Mustafa Kamal', 'MQM-P', '76,550', '44.1'],
      ]
    }
  },

  // ── REFERENCE DATA ─────────────────────────────────────────────────────
  {
    id: 'pbs-admin-boundaries',
    title: 'Pakistan Administrative Divisions – Districts and Tehsils',
    slug: 'pakistan-administrative-divisions',
    category: 'reference-data',
    categoryLabel: 'Government Reference Data',
    publisher: 'Pakistan Bureau of Statistics',
    publisherSlug: 'pakistan-bureau-of-statistics',
    description: 'Complete reference list of all administrative units in Pakistan: 4 provinces, 2 special areas, 1 federal capital, 154 districts, 600+ tehsils, and 7,000+ union councils with official codes.',
    longDescription: 'This reference dataset provides official PBS administrative codes for all units in Pakistan\'s administrative hierarchy. Used for linking geographic data across government systems, it includes the standardised codes that align with the Population Census, NADRA records, and National Finance Commission award calculations.',
    updateFrequency: 'As amended',
    lastUpdated: '2023-09-01',
    coverage: 'National',
    formats: ['CSV', 'JSON', 'XLSX'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['administrative', 'districts', 'tehsils', 'reference', 'codes'],
    featured: false,
    downloads: 21870,
    apiAvailable: true,
    source: 'https://www.pbs.gov.pk',
    previewData: {
      headers: ['Province Code', 'Province', 'District Code', 'District', 'Tehsil Count'],
      rows: [
        ['1', 'Khyber Pakhtunkhwa', '101', 'Abbottabad', '4'],
        ['2', 'Federal Capital', '201', 'Islamabad', '5'],
        ['3', 'Punjab', '301', 'Attock', '5'],
        ['4', 'Sindh', '401', 'Badin', '4'],
        ['5', 'Balochistan', '501', 'Awaran', '3'],
      ]
    }
  },

  // ── CITIES & URBAN ─────────────────────────────────────────────────────
  {
    id: 'punjab-urban-unit',
    title: 'Punjab Urban Indicators Report – City Profiles',
    slug: 'punjab-urban-indicators',
    category: 'cities-urban',
    categoryLabel: 'Cities and Urban Development',
    publisher: 'Punjab Urban Unit',
    publisherSlug: 'punjab-urban-unit',
    description: 'Comprehensive city-level indicators for 36 district headquarters of Punjab including urban population, sanitation access, road density, water supply, waste management, and air quality.',
    longDescription: 'The Punjab Urban Unit\'s annual city profiling exercise captures key urban service delivery indicators across all district headquarters. Metrics include percentage of households with piped water, solid waste collection coverage, road conditions index, street lighting density, and basic urban service satisfaction scores.',
    updateFrequency: 'Annual',
    lastUpdated: '2024-03-30',
    coverage: '36 Districts of Punjab',
    formats: ['CSV', 'XLSX', 'PDF'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['urban', 'Punjab', 'city data', 'infrastructure', 'sanitation'],
    featured: false,
    downloads: 4120,
    apiAvailable: false,
    source: 'https://urbanunit.gov.pk',
    previewData: {
      headers: ['City', 'Urban Pop.', 'Piped Water (%)', 'Solid Waste (%)', 'Road Index'],
      rows: [
        ['Lahore', '14,478,000', '82.3', '68.4', '7.2'],
        ['Faisalabad', '4,203,000', '71.5', '62.1', '6.8'],
        ['Rawalpindi', '2,908,000', '79.8', '70.3', '7.0'],
        ['Gujranwala', '2,561,000', '67.4', '58.2', '6.5'],
        ['Multan', '2,013,000', '64.9', '54.7', '6.3'],
      ]
    }
  },

  // ── GOVERNMENT SPENDING ────────────────────────────────────────────────
  {
    id: 'ppra-procurement',
    title: 'Public Procurement Regulatory Authority – Awards Register',
    slug: 'ppra-procurement-awards-register',
    category: 'government-spending',
    categoryLabel: 'Government Spending',
    publisher: 'Public Procurement Regulatory Authority',
    publisherSlug: 'ppra',
    description: 'Register of all public procurement contract awards above PKR 500,000 by federal government entities, including contractor name, contract value, procurement method, and awarding department.',
    longDescription: 'PPRA maintains a public register of contract awards to promote transparency in government procurement. This dataset covers all open competitive tender awards, limited tendering, and single-source procurements by Federal Government departments, corporations, and autonomous bodies. It is a key tool for anti-corruption oversight and value-for-money analysis.',
    updateFrequency: 'Monthly',
    lastUpdated: '2025-02-28',
    coverage: '2016–Present',
    formats: ['CSV', 'XLSX'],
    license: 'Open Government Data Licence – Pakistan v1.0',
    tags: ['procurement', 'contracts', 'spending', 'transparency', 'PPRA'],
    featured: false,
    downloads: 7340,
    apiAvailable: false,
    source: 'https://www.ppra.org.pk',
    previewData: {
      headers: ['Department', 'Contractor', 'Contract Value (PKR M)', 'Method', 'Date'],
      rows: [
        ['NHA', 'FWO', '4,230.5', 'Open Competitive', 'Jan 2025'],
        ['WAPDA', 'DESCON Engineering', '1,876.3', 'Open Competitive', 'Jan 2025'],
        ['PIA', 'Airbus Industries', '892,000.0', 'Single Source', 'Dec 2024'],
        ['SNGPL', 'KSB Pumps', '245.8', 'Open Competitive', 'Feb 2025'],
        ['FBR', 'LMKR Pvt Ltd', '312.4', 'Open Competitive', 'Feb 2025'],
      ]
    }
  },
];

export const getDatasetById   = (id)   => datasets.find(d => d.id === id);
export const getDatasetBySlug = (slug) => datasets.find(d => d.slug === slug);
export const getDatasetsByCategory = (catId) => datasets.filter(d => d.category === catId);
export const featuredDatasets = datasets.filter(d => d.featured);
export const recentDatasets   = [...datasets].sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)).slice(0, 6);
