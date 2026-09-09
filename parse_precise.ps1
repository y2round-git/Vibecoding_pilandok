$utf8 = [System.Text.Encoding]::UTF8
$jStr = [System.IO.File]::ReadAllText("$pwd\jinhak_clean.html", $utf8)
$uStr = [System.IO.File]::ReadAllText("$pwd\uway_clean.html", $utf8)

Write-Host "=========================================="
Write-Host "SEARCHING JINHAK FOR TARGET MAJORS"
Write-Host "=========================================="

# 1. ?숈깮遺醫낇빀 ?쇰컲?숈깮 (SelType41270)
# 2. ?숈깮遺援먭낵 吏??씤??1 (SelType41267)
# 3. ?숈깮遺援먭낵 ?쇰컲?꾪삎 (SelType41231)

function Dump-Table-Rows($html, $selTypeId, $typeName) {
    Write-Host "=== Track: $typeName ($selTypeId) ==="
    if ($html -match "(?s)<div id=""$selTypeId"".*?</table>") {
        $block = $matches[0]
        $rows = $block -split "<tr>"
        foreach ($r in $rows) {
            # Strip tags and spaces
            $clean = $r -replace "<[^>]+>", " " -replace "\s+", " "
            $clean = $clean.Trim()
            if ($clean.Length -gt 0) {
                Write-Host "  ROW:" $clean
            }
        }
    } else {
        Write-Host "Section $selTypeId not found!"
    }
}

Dump-Table-Rows $jStr "SelType41270" "?숈깮遺醫낇빀 ?쇰컲?숈깮"
Dump-Table-Rows $jStr "SelType41267" "?숈깮遺援먭낵 吏??씤?р뀪"
Dump-Table-Rows $jStr "SelType41231" "?숈깮遺援먭낵 ?쇰컲?꾪삎"

Write-Host "=========================================="
Write-Host "SEARCHING UWAY FOR WONKWANG UNIVERSITY"
Write-Host "=========================================="

$uRows = $uStr -split "<tr"
foreach ($ur in $uRows) {
    $cleanU = $ur -replace "<[^>]+>", " " -replace "\s+", " "
    $cleanU = $cleanU.Trim()
    if ($cleanU -like "*李쎌쓽臾명솕*") {
        Write-Host "  UWAY ROW:" $cleanU
    }
}