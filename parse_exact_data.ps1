[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$utf8 = [System.Text.Encoding]::UTF8

$jStr = [System.IO.File]::ReadAllText("$pwd\jinhak_utf8_clean.html", $utf8)
$uStr = [System.IO.File]::ReadAllText("$pwd\uway_utf8_clean.html", $utf8)

Write-Host "=========================================================="
Write-Host "PARSING EXACT DATA FOR THE 4 USER-REQUESTED DEPARTMENTS"
Write-Host "=========================================================="

function Parse-Jinhak-Item($html, $selTypeId, $deptName) {
    if ($html -match "(?s)<div id=""$selTypeId"".*?</table>") {
        $block = $matches[0]
        $rows = $block -split "<tr"
        foreach ($r in $rows) {
            if ($r -like "*$deptName*") {
                $cells = $r -split "<td"
                $cleanCells = @()
                foreach ($c in $cells) {
                    $t = ($c -replace "<[^>]+>", " ").Trim()
                    if ($t.Length -gt 0) { $cleanCells += $t }
                }
                Write-Host "MATCH [$deptName] in [$selTypeId]:" ($cleanCells -join " | ")
                return $cleanCells
            }
        }
    }
    Write-Host "NOT FOUND: $deptName in $selTypeId"
}

Parse-Jinhak-Item $jStr "SelType41270" "誘몃뵒?대Ц?뷀븰遺"
Parse-Jinhak-Item $jStr "SelType41267" "?먯쑉?꾧났?숇?"
Parse-Jinhak-Item $jStr "SelType41231" "臾댁뿭?숆낵"

Write-Host "--- Searching Wonkwang Univ (Uway) for 李쎌쓽臾명솕?듯빀怨꾩뿴 ---"
$uRows = $uStr -split "<tr"
foreach ($ur in $uRows) {
    if ($ur -like "*李쎌쓽臾명솕?듯빀怨꾩뿴*" -or $ur -like "*李쎌쓽臾명솕*") {
        $cells = $ur -split "<td"
        $cleanCells = @()
        foreach ($c in $cells) {
            $t = ($c -replace "<[^>]+>", " ").Trim()
            if ($t.Length -gt 0) { $cleanCells += $t }
        }
        Write-Host "MATCH Wonkwang [李쎌쓽臾명솕?듯빀怨꾩뿴]:" ($cleanCells -join " | ")
    }
}