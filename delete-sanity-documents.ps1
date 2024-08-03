param(
    [string]$type
)

# Construct the query
$query = "*[_type=='$type'] {_id}"

# Execute the query and iterate over results
$sanityQueryResult = npx sanity documents query $query | ConvertFrom-Json
foreach ($item in $sanityQueryResult) {
    $id = $item."_id"
    
    # Delete document by ID
    npx sanity documents delete $id
}
