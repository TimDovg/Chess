let images = [`<img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk4IDI5OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk4IDI5ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMTYuOTIzLDI0Ni41MzhjMy40NTctNi41NTYsOS45NjMtMjIuNzc3LTEuNjY2LTM5LjEzN0MyMDAuNTA4LDE4Ni42NSwxNzkuOTQyLDEyNSwxOTMuNjEsODNIMjA3VjBoLTE2djE3aC0xNlYwaC0xOHYxNyAgIGgtMTZWMGgtMTd2MTdoLTE2VjBIOTF2ODNoMTQuMDU3YzEzLjY2OCw0Mi02Ljk4LDEwMy42NS0yMS43MywxMjQuNDAxYy0xMS42MjksMTYuMzU5LTUuMzczLDMyLjcwNi0xLjkxNiwzOS4yNjIgICBDNzcuMzQ3LDI0Ny4wNDQsNzQsMjUwLjMzNyw3NCwyNTQuNXYxOGMwLDQuNDE4LDMuOTE1LDguNSw4LjMzMyw4LjVIODN2MTdoMTMydi0xN2gxLjMzM2M0LjQxOCwwLDcuNjY3LTQuMDgyLDcuNjY3LTguNXYtMTggICBDMjI0LDI1MC4zMzgsMjIwLjk4NiwyNDYuOTIsMjE2LjkyMywyNDYuNTM4eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0M5M0YzRiI+PC9wYXRoPgo8L2c+PC9nPiA8L3N2Zz4=" width="26" style="margin-top: 4px"/>`, `<img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk4IDI5OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk4IDI5ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMTAuOTUyLDExNmMxNC45MTIsMCwyNy4wMzctMTIuMDg4LDI3LjAzNy0yN3MtMTAuOTQ1LTI1LjAxMy0yNi45NjQtMzAuNjY2Yy0xMS4zMzMtNC0xOC4wMTgtMTAuODIzLTIzLjAwOS0xOS40MTIgICBDMTgzLjAyNSwzMC4zMzMsMTcyLjAyNSwxNywxNTcuNTI1LDE3Yy01LjgzMiwwLTE5Ljc5OCwwLTE5Ljc5OCwwVjBjLTEwNyw0MC4wMy03Mi4zNjksMTg0LTcyLjM2OSwxODRoMjEuMzY5djE0aC02LjM2OSAgIGMtNC40MTgsMC04LjYzMSwzLjU4Mi04LjYzMSw4djFjMCwzLjI4OSwyLjMwMiw2LjExMSw1LjE0LDcuMzQxYy04Ljc3LDE1LjA1LTEuNDE5LDI5Ljc3NSwwLjc2MSwzMy42NTloLTUuMjcxICAgYy00LjQxOCwwLTguNjMxLDMuNTgyLTguNjMxLDh2MThjMCw0LjQxOCw0LDgsOCw4djE2aDEzMnYtMTYuMDY5YzQtMC40OTMsNy0zLjg1Myw3LTcuOTMxdi0xOGMwLTQuNDE4LTIuOTUxLTgtNy4zNjktOGgtNC4yNyAgIGMyLjE4MS0zLjg4NCw4LjkwMi0xOC42MDksMC4xMy0zMy42NTljMi44MzgtMS4yMyw0LjUwOC00LjA1Miw0LjUwOC03LjM0MXYtMWMwLTQuNDE4LTIuOTUxLTgtNy4zNjktOGgtNy42MzF2LTE0aDI0LjEzMiAgIGMtMTYuNTAxLTU0LTY2LjMzNC04My02Ni4zMzQtODNoNDAuMTgyQzE5MS4xNDYsMTA5Ljg4OSwyMDAuMzUxLDExNiwyMTAuOTUyLDExNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0M5M0YzRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" width="26" style="margin-top: 4px"/>`, `<img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3LjA4IDI5Ny4wOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3LjA4IDI5Ny4wODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMDYuODczLDI1NS4wOGgtMy40MWMyLjIxNC0zLjMzNyw4LjMyLTE0LjUzNi0wLjcxMi0yNS42Yy04LjktMTAuOTA1LTI1LjEzNy0zOS41NDYtMjQuNDQ4LTY0LjRoMy41NyAgIGM0LjQxOCwwLDcuNjY3LTMuNTgyLDcuNjY3LTh2LTFjMC00LjQxOC0zLjI0OS04LTcuNjY3LThoLTQuMzMzdi00LjI4NWMxMy04Ljk3MSwyMC41MTEtMjMuNTAyLDIwLjUxMS0zOS45MTQgICBjMC0xMC4zMzItNy4wMTEtMjYuMTEtMTUuODE5LTQxLjcyMWwtMTguNTUzLDE4LjU5NWMtMy4xMTEsMy4xMTEtOC4xODIsMy4xMTEtMTEuMjk0LDAuMDAxbC0wLjkyMS0wLjkzMyAgIGMtMy4xMTEtMy4xMS0zLjEwNi04LjIwMiwwLjAwNS0xMS4zMTNsMjEuNjc2LTIxLjY3NGMtNC40NDQtNy4wNjktOC44NjktMTMuNjc4LTEyLjcwMy0xOS4yMjQgICBjMi44ODEtMi45Myw0LjY2My02Ljk0NCw0LjY2My0xMS4zNzlDMTY1LjEwNiw3LjI2OCwxNTcuODQxLDAsMTQ4Ljg3NCwwYy04Ljk2NywwLTE2LjIzNCw3LjI2OC0xNi4yMzQsMTYuMjMzICAgYzAsNC40MzQsMS43ODEsOC40NDgsNC42NjIsMTEuMzc5Yy0xNC41ODUsMjEuMTAxLTM3Ljk0LDU3LjU4Ny0zNy45NCw3Ni4yNjljMCwxNi44NTMsOC4xNzgsMzEuNzI0LDIxLjE3OCw0MC42MjV2My41NzRoLTQuNjY3ICAgYy00LjQxOCwwLTguMzMzLDMuNTgyLTguMzMzLDh2MWMwLDQuNDE4LDMuOTE1LDgsOC4zMzMsOGgzLjU3MWMwLjY4OSwyNC44NTUtMTUuNTQ3LDUzLjQ5NS0yNC40NDgsNjQuNCAgIGMtOS4wMzEsMTEuMDY0LTIuOTI2LDIyLjI2My0wLjcxMiwyNS42aC0zLjQxMWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djljMCw0LjA3OCwzLDcuNDM4LDcsNy45MzF2MTcuMDY5aDExOHYtMTcuMDY5ICAgYzQtMC40OTMsNy0zLjg1Myw3LTcuOTMxdi05QzIxNC41NCwyNTguNjYyLDIxMS4yOTEsMjU1LjA4LDIwNi44NzMsMjU1LjA4eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0M5M0YzRiI+PC9wYXRoPgo8L2c+PC9nPiA8L3N2Zz4=" width="26" style="margin-top: 4px" />`, `<img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3Ljc3IDI5Ny43NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3Ljc3IDI5Ny43NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMDcuMjE4LDI1NS43N2gtMy4zNjljMi4yMTQtMy4zMzcsOC4zMi0xNC41MzYtMC43MTItMjUuNmMtOC45LTEwLjkwNS0yNS4xMjktMzkuNTQ2LTI0LjQzOC02NC40aDMuNTE5ICAgYzQuNDE4LDAsNy42NjctMy41ODIsNy42NjctOHYtMWMwLTQuNDE4LTMuNTgyLTgtOC04YzQuNDE4LDAsOC0zLjU4Miw4LTh2LTFjMC00LjQxOC0zLjI0OS04LTcuNjY3LThoLTQuNjI2ICAgYy0yLjA2NC0yMS43NDEsMS4wNzgtNDMuMDU0LDUuOTU5LTU0LjY2NmMxLjg2LTQuNDI1LDQuMTE4LTcuNzksNi4yOTYtMTAuMzM0aDEuMzcxYzQuNDE4LDAsNy42NjctMy41ODIsNy42NjctOHYtMSAgIGMwLTQuNDE4LTMuMjQ5LTgtNy42NjctOGgtOS44Yy0xLjgwMy0xMC44OTYtOC45OTgtMTkuOTY2LTE4Ljc1NS0yNC4zODNjMS43ODMtMi42MDcsMi44MjktNS43NTcsMi44MjktOS4xNTQgICBDMTY1LjQ5Miw3LjI2NywxNTguMjI3LDAsMTQ5LjI2LDBzLTE2LjIzNCw3LjI2Ny0xNi4yMzQsMTYuMjMyYzAsMy4zODUsMS4wMzcsNi41MjUsMi44MDksOS4xMjcgICBjLTkuNzg4LDQuNDA2LTE3LjAxLDEzLjQ5LTE4LjgxNiwyNC40MWgtMTAuOGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djFjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMi4zNzEgICBjMi4xNzgsMi41NDQsNC40MzYsNS45MDksNi4yOTYsMTAuMzM0YzQuODgxLDExLjYxMiw4LjAyMywzMi45MjUsNS45NTksNTQuNjY2aC00LjYyNmMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjU4Miw4LDgsOGMtNC40MTgsMC04LDMuNTgyLTgsOHYxYzAsNC40MTgsMy45MTUsOCw4LjMzMyw4aDMuNjAyYzAuNjkyLDI0Ljg1NC0xNS41MzYsNTMuNDk1LTI0LjQzOCw2NC40ICAgYy05LjAzMSwxMS4wNjMtMi45MjYsMjIuMjYzLTAuNzEyLDI1LjZoLTMuNDUyYy00LjQxOCwwLTguMzMzLDMuNTgyLTguMzMzLDh2OWMwLDQuMDc4LDMsNy40MzgsNyw3LjkzMXYxNy4wNjloMTE4VjI4MC43ICAgYzQtMC40OTMsNy0zLjg1Myw3LTcuOTMxdi05QzIxNC44ODUsMjU5LjM1MiwyMTEuNjM2LDI1NS43NywyMDcuMjE4LDI1NS43N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0M5M0YzRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" width="26" style="margin-top: 4px" />`, `<img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk4IDI5OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk4IDI5ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxwYXRoIGQ9Ik0xOTcuMzMzLDI1NmgtMS42NDFjMS44NzgtMy4zMzcsNy4wNjEtMTQuNTM2LTAuNjA1LTI1LjZjLTcuNTU0LTEwLjkwNS0yMS40OTEtMzkuNTQ3LTIwLjkwNC02NC40MDEgICBjNC40MDktMC4wMSw3LjgxNi0zLjU4Nyw3LjgxNi03Ljk5OXYtMWMwLTQuNDE4LTMuNTgyLTgtOC04YzQuNDE4LDAsOC0zLjU4Miw4LTh2LTFjMC00LjQxOC0zLjI0OS04LTcuNjY3LThoLTMuNTUgICBjLTEuMDA2LTE2LjE0MiwxLjMwNy0yOS44NjEsNC43OTgtNDAuNzI0YzEuMTIxLTMuNDg3LDIuNDMyLTYuMTg2LDMuNzUyLTguMjc2aDJjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xICAgYzAtNC4zNDMtMy40NjMtNy44Ny03Ljc3Ny03Ljk4OEMxNzkuMDg3LDUyLjc3MSwxNjksNDIuMjAzLDE1NiwzOS4zNjNWMjdoMTJWMTJoLTEyVjBoLTE1djEyaC0xMnYxNWgxMnYxMi41OTUgICBjLTEyLDMuMTUtMjEuODAzLDEzLjUxMi0yMy44ODgsMjYuNDA1aC0wLjc3OWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djFjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMyAgIGMxLjMyLDIuMDkxLDIuNjMxLDQuNzg5LDMuNzUyLDguMjc2YzMuNDkxLDEwLjg2Miw1LjgwNCwyNC41ODIsNC43OTgsNDAuNzI0aC00LjU1Yy00LjQxOCwwLTguMzMzLDMuNTgyLTguMzMzLDh2MSAgIGMwLDQuNDE4LDMuNTgyLDgsOCw4Yy00LjQxOCwwLTgsMy41ODItOCw4djFjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS4wNTNjMC41ODgsMjQuODU1LTEzLjE4Myw1My40OTUtMjAuNzM3LDY0LjQgICBjLTcuNjY0LDExLjA2My0yLjQ4MiwyMi4yNjMtMC42MDQsMjUuNmgtMS43MTFjLTQuNDE4LDAtOC4zMzMsMy41ODItOC4zMzMsOHY5YzAsMy43MjcsMyw2Ljg0OSw2LDcuNzM3VjI5OGgxMDB2LTE3LjI2MyAgIGM0LTAuODg5LDYtNC4wMTEsNi03LjczN3YtOUMyMDUsMjU5LjU4MiwyMDEuNzUxLDI1NiwxOTcuMzMzLDI1NnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0M5M0YzRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" width="26" style="margin-top: 4px" />`, `<img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0M5M0YzRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" width="26" style="margin-top: 4px" />`, `<img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk4IDI5OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk4IDI5ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMTYuOTIzLDI0Ni41MzhjMy40NTctNi41NTYsOS45NjMtMjIuNzc3LTEuNjY2LTM5LjEzN0MyMDAuNTA4LDE4Ni42NSwxNzkuOTQyLDEyNSwxOTMuNjEsODNIMjA3VjBoLTE2djE3aC0xNlYwaC0xOHYxNyAgIGgtMTZWMGgtMTd2MTdoLTE2VjBIOTF2ODNoMTQuMDU3YzEzLjY2OCw0Mi02Ljk4LDEwMy42NS0yMS43MywxMjQuNDAxYy0xMS42MjksMTYuMzU5LTUuMzczLDMyLjcwNi0xLjkxNiwzOS4yNjIgICBDNzcuMzQ3LDI0Ny4wNDQsNzQsMjUwLjMzNyw3NCwyNTQuNXYxOGMwLDQuNDE4LDMuOTE1LDguNSw4LjMzMyw4LjVIODN2MTdoMTMydi0xN2gxLjMzM2M0LjQxOCwwLDcuNjY3LTQuMDgyLDcuNjY3LTguNXYtMTggICBDMjI0LDI1MC4zMzgsMjIwLjk4NiwyNDYuOTIsMjE2LjkyMywyNDYuNTM4eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzNGQzkzRiI+PC9wYXRoPgo8L2c+PC9nPiA8L3N2Zz4=" width="26" style="margin-top: 4px" />`, `<img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk4IDI5OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk4IDI5ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMTAuOTUyLDExNmMxNC45MTIsMCwyNy4wMzctMTIuMDg4LDI3LjAzNy0yN3MtMTAuOTQ1LTI1LjAxMy0yNi45NjQtMzAuNjY2Yy0xMS4zMzMtNC0xOC4wMTgtMTAuODIzLTIzLjAwOS0xOS40MTIgICBDMTgzLjAyNSwzMC4zMzMsMTcyLjAyNSwxNywxNTcuNTI1LDE3Yy01LjgzMiwwLTE5Ljc5OCwwLTE5Ljc5OCwwVjBjLTEwNyw0MC4wMy03Mi4zNjksMTg0LTcyLjM2OSwxODRoMjEuMzY5djE0aC02LjM2OSAgIGMtNC40MTgsMC04LjYzMSwzLjU4Mi04LjYzMSw4djFjMCwzLjI4OSwyLjMwMiw2LjExMSw1LjE0LDcuMzQxYy04Ljc3LDE1LjA1LTEuNDE5LDI5Ljc3NSwwLjc2MSwzMy42NTloLTUuMjcxICAgYy00LjQxOCwwLTguNjMxLDMuNTgyLTguNjMxLDh2MThjMCw0LjQxOCw0LDgsOCw4djE2aDEzMnYtMTYuMDY5YzQtMC40OTMsNy0zLjg1Myw3LTcuOTMxdi0xOGMwLTQuNDE4LTIuOTUxLTgtNy4zNjktOGgtNC4yNyAgIGMyLjE4MS0zLjg4NCw4LjkwMi0xOC42MDksMC4xMy0zMy42NTljMi44MzgtMS4yMyw0LjUwOC00LjA1Miw0LjUwOC03LjM0MXYtMWMwLTQuNDE4LTIuOTUxLTgtNy4zNjktOGgtNy42MzF2LTE0aDI0LjEzMiAgIGMtMTYuNTAxLTU0LTY2LjMzNC04My02Ni4zMzQtODNoNDAuMTgyQzE5MS4xNDYsMTA5Ljg4OSwyMDAuMzUxLDExNiwyMTAuOTUyLDExNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzNGQzkzRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" width="26" style="margin-top: 4px" />`, `<img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3LjA4IDI5Ny4wOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3LjA4IDI5Ny4wODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMDYuODczLDI1NS4wOGgtMy40MWMyLjIxNC0zLjMzNyw4LjMyLTE0LjUzNi0wLjcxMi0yNS42Yy04LjktMTAuOTA1LTI1LjEzNy0zOS41NDYtMjQuNDQ4LTY0LjRoMy41NyAgIGM0LjQxOCwwLDcuNjY3LTMuNTgyLDcuNjY3LTh2LTFjMC00LjQxOC0zLjI0OS04LTcuNjY3LThoLTQuMzMzdi00LjI4NWMxMy04Ljk3MSwyMC41MTEtMjMuNTAyLDIwLjUxMS0zOS45MTQgICBjMC0xMC4zMzItNy4wMTEtMjYuMTEtMTUuODE5LTQxLjcyMWwtMTguNTUzLDE4LjU5NWMtMy4xMTEsMy4xMTEtOC4xODIsMy4xMTEtMTEuMjk0LDAuMDAxbC0wLjkyMS0wLjkzMyAgIGMtMy4xMTEtMy4xMS0zLjEwNi04LjIwMiwwLjAwNS0xMS4zMTNsMjEuNjc2LTIxLjY3NGMtNC40NDQtNy4wNjktOC44NjktMTMuNjc4LTEyLjcwMy0xOS4yMjQgICBjMi44ODEtMi45Myw0LjY2My02Ljk0NCw0LjY2My0xMS4zNzlDMTY1LjEwNiw3LjI2OCwxNTcuODQxLDAsMTQ4Ljg3NCwwYy04Ljk2NywwLTE2LjIzNCw3LjI2OC0xNi4yMzQsMTYuMjMzICAgYzAsNC40MzQsMS43ODEsOC40NDgsNC42NjIsMTEuMzc5Yy0xNC41ODUsMjEuMTAxLTM3Ljk0LDU3LjU4Ny0zNy45NCw3Ni4yNjljMCwxNi44NTMsOC4xNzgsMzEuNzI0LDIxLjE3OCw0MC42MjV2My41NzRoLTQuNjY3ICAgYy00LjQxOCwwLTguMzMzLDMuNTgyLTguMzMzLDh2MWMwLDQuNDE4LDMuOTE1LDgsOC4zMzMsOGgzLjU3MWMwLjY4OSwyNC44NTUtMTUuNTQ3LDUzLjQ5NS0yNC40NDgsNjQuNCAgIGMtOS4wMzEsMTEuMDY0LTIuOTI2LDIyLjI2My0wLjcxMiwyNS42aC0zLjQxMWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djljMCw0LjA3OCwzLDcuNDM4LDcsNy45MzF2MTcuMDY5aDExOHYtMTcuMDY5ICAgYzQtMC40OTMsNy0zLjg1Myw3LTcuOTMxdi05QzIxNC41NCwyNTguNjYyLDIxMS4yOTEsMjU1LjA4LDIwNi44NzMsMjU1LjA4eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzNGQzkzRiI+PC9wYXRoPgo8L2c+PC9nPiA8L3N2Zz4=" width="26" style="margin-top: 4px" />`, `<img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3Ljc3IDI5Ny43NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3Ljc3IDI5Ny43NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMDcuMjE4LDI1NS43N2gtMy4zNjljMi4yMTQtMy4zMzcsOC4zMi0xNC41MzYtMC43MTItMjUuNmMtOC45LTEwLjkwNS0yNS4xMjktMzkuNTQ2LTI0LjQzOC02NC40aDMuNTE5ICAgYzQuNDE4LDAsNy42NjctMy41ODIsNy42NjctOHYtMWMwLTQuNDE4LTMuNTgyLTgtOC04YzQuNDE4LDAsOC0zLjU4Miw4LTh2LTFjMC00LjQxOC0zLjI0OS04LTcuNjY3LThoLTQuNjI2ICAgYy0yLjA2NC0yMS43NDEsMS4wNzgtNDMuMDU0LDUuOTU5LTU0LjY2NmMxLjg2LTQuNDI1LDQuMTE4LTcuNzksNi4yOTYtMTAuMzM0aDEuMzcxYzQuNDE4LDAsNy42NjctMy41ODIsNy42NjctOHYtMSAgIGMwLTQuNDE4LTMuMjQ5LTgtNy42NjctOGgtOS44Yy0xLjgwMy0xMC44OTYtOC45OTgtMTkuOTY2LTE4Ljc1NS0yNC4zODNjMS43ODMtMi42MDcsMi44MjktNS43NTcsMi44MjktOS4xNTQgICBDMTY1LjQ5Miw3LjI2NywxNTguMjI3LDAsMTQ5LjI2LDBzLTE2LjIzNCw3LjI2Ny0xNi4yMzQsMTYuMjMyYzAsMy4zODUsMS4wMzcsNi41MjUsMi44MDksOS4xMjcgICBjLTkuNzg4LDQuNDA2LTE3LjAxLDEzLjQ5LTE4LjgxNiwyNC40MWgtMTAuOGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djFjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMi4zNzEgICBjMi4xNzgsMi41NDQsNC40MzYsNS45MDksNi4yOTYsMTAuMzM0YzQuODgxLDExLjYxMiw4LjAyMywzMi45MjUsNS45NTksNTQuNjY2aC00LjYyNmMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjU4Miw4LDgsOGMtNC40MTgsMC04LDMuNTgyLTgsOHYxYzAsNC40MTgsMy45MTUsOCw4LjMzMyw4aDMuNjAyYzAuNjkyLDI0Ljg1NC0xNS41MzYsNTMuNDk1LTI0LjQzOCw2NC40ICAgYy05LjAzMSwxMS4wNjMtMi45MjYsMjIuMjYzLTAuNzEyLDI1LjZoLTMuNDUyYy00LjQxOCwwLTguMzMzLDMuNTgyLTguMzMzLDh2OWMwLDQuMDc4LDMsNy40MzgsNyw3LjkzMXYxNy4wNjloMTE4VjI4MC43ICAgYzQtMC40OTMsNy0zLjg1Myw3LTcuOTMxdi05QzIxNC44ODUsMjU5LjM1MiwyMTEuNjM2LDI1NS43NywyMDcuMjE4LDI1NS43N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzNGQzkzRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" width="26" style="margin-top: 4px" />`, `<img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk4IDI5OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk4IDI5ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0xOTcuMzMzLDI1NmgtMS42NDFjMS44NzgtMy4zMzcsNy4wNjEtMTQuNTM2LTAuNjA1LTI1LjZjLTcuNTU0LTEwLjkwNS0yMS40OTEtMzkuNTQ3LTIwLjkwNC02NC40MDEgICBjNC40MDktMC4wMSw3LjgxNi0zLjU4Nyw3LjgxNi03Ljk5OXYtMWMwLTQuNDE4LTMuNTgyLTgtOC04YzQuNDE4LDAsOC0zLjU4Miw4LTh2LTFjMC00LjQxOC0zLjI0OS04LTcuNjY3LThoLTMuNTUgICBjLTEuMDA2LTE2LjE0MiwxLjMwNy0yOS44NjEsNC43OTgtNDAuNzI0YzEuMTIxLTMuNDg3LDIuNDMyLTYuMTg2LDMuNzUyLTguMjc2aDJjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xICAgYzAtNC4zNDMtMy40NjMtNy44Ny03Ljc3Ny03Ljk4OEMxNzkuMDg3LDUyLjc3MSwxNjksNDIuMjAzLDE1NiwzOS4zNjNWMjdoMTJWMTJoLTEyVjBoLTE1djEyaC0xMnYxNWgxMnYxMi41OTUgICBjLTEyLDMuMTUtMjEuODAzLDEzLjUxMi0yMy44ODgsMjYuNDA1aC0wLjc3OWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djFjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMyAgIGMxLjMyLDIuMDkxLDIuNjMxLDQuNzg5LDMuNzUyLDguMjc2YzMuNDkxLDEwLjg2Miw1LjgwNCwyNC41ODIsNC43OTgsNDAuNzI0aC00LjU1Yy00LjQxOCwwLTguMzMzLDMuNTgyLTguMzMzLDh2MSAgIGMwLDQuNDE4LDMuNTgyLDgsOCw4Yy00LjQxOCwwLTgsMy41ODItOCw4djFjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS4wNTNjMC41ODgsMjQuODU1LTEzLjE4Myw1My40OTUtMjAuNzM3LDY0LjQgICBjLTcuNjY0LDExLjA2My0yLjQ4MiwyMi4yNjMtMC42MDQsMjUuNmgtMS43MTFjLTQuNDE4LDAtOC4zMzMsMy41ODItOC4zMzMsOHY5YzAsMy43MjcsMyw2Ljg0OSw2LDcuNzM3VjI5OGgxMDB2LTE3LjI2MyAgIGM0LTAuODg5LDYtNC4wMTEsNi03LjczN3YtOUMyMDUsMjU5LjU4MiwyMDEuNzUxLDI1NiwxOTcuMzMzLDI1NnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzNGQzkzRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" width="26" style="margin-top: 4px" />`, `<img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjk3IDI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk3IDI5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMjMuMzMzLDI0N2gtNS45MjZjMi42MDctMy44MTEsMTAuNzk4LTE4LjAyNC0wLjcyNy0zMi4yNDhjLTEzLjMzNC0xNi40Ni0zOS44NjMtNjUuNzQ4LTI3LjMyNC05OC43NTJoMC45NzcgICBjNC40MTgsMCw3LjY2Ny0zLjU4Miw3LjY2Ny04di0xYzAtNC40MTgtMy4yNDktOC03LjY2Ny04aC0xLjIyNWMxMC45MTctMTAuNDY2LDE3LjcyNS0yNS4xODQsMTcuNzI1LTQxLjUgICBjMC0zMS43NTYtMjUuNzQ0LTU3LjUtNTcuNS01Ny41cy01Ny41LDI1Ljc0NC01Ny41LDU3LjVjMCwxNi4zMTYsNi44MDgsMzEuMDM0LDE3LjcyNSw0MS41aC0yLjIyNWMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djEgICBjMCw0LjQxOCwzLjkxNSw4LDguMzMzLDhoMS45NzljMTIuNTM5LDMzLjAwNC0xMy45OSw4Mi4yOTItMjcuMzI0LDk4Ljc1MmMtMTEuNTI0LDE0LjIyNC0zLjMzNCwyOC40MzctMC43MjcsMzIuMjQ4aC02LjkyOCAgIGMtNC40MTgsMC04LjMzMywzLjU4Mi04LjMzMyw4djE4YzAsNC40MTgsMy45MTUsOCw4LjMzMyw4SDc1djE2aDE0OHYtMTZjNSwwLDgtMy41ODIsOC04di0xOEMyMzEsMjUwLjU4MiwyMjcuNzUxLDI0NywyMjMuMzMzLDI0NyAgIHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzNGQzkzRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" width="26" style="margin-top: 4px" />`];

/* 0: ред тура
  1: ред конь
  2: ред слон
  3: ред ферзь
  4: ред король
  5: ред пешка
  6: зеленый тура
  7: зеленый конь
  8: зеленый слон
  9: зеленый ферзь
  10: зеленый король
  11: зеленый пешка
*/

(function() {
	let body = document.getElementsByTagName('body')[0];
  let game = document.createElement('div');
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  body.appendChild(game);
  document.getElementsByTagName('title').innerText = 'Chess game';
  desk();

  function desk() {
      let button = document.createElement('button');
      let table = document.createElement('table');

      game.appendChild(document.createElement('br'));
      game.appendChild(button);
      game.appendChild(document.createElement('br'));
      button.innerHTML = 'Начать';
      game.style.display = 'flex';
      game.style.flexDirection = 'column';
      game.style.alignItems = 'center';
      button.onclick = gameRun;
      game.appendChild(table);
      table.setAttribute('id', 'table');
      table.style.width = '400px';
      table.style.height = '400px';
      for (let i = 0; i < 9; i++) { // вертикаль
        let tr = document.createElement('tr');
        table.appendChild(tr);
        
        for (let j = 0; j < 9; j++) { // горизонталь
          let td = document.createElement('td');
          td.style.border = '1px solid black';
          tr.appendChild(td);
          td.style.textAlign = 'center';

          if (j % 2 && i % 2 || !(j % 2) && !(i % 2)) td.style.background = 'lightgray'; // сложно, но круто разукрашиваем

          if (j == 0) { // пустая ячека по вертикали
            td.style.border = 'none';
            td.width = '42px';
            td.height = '42px';
            td.style.background = 'white';
            if (i != 8) {
              td.innerHTML = `<b>${i + 1}</b>`;
            }
          }

          if (i == 8) { // пустая ячека по горизонтали
            td.style.border = 'none';
            td.width = '42px';
            td.height = '42px';
            td.style.background = 'white';
            if (j != 0) {
              td.innerHTML = `<b>${letters[j - 1]}</b>`;
            }
          }

          if (i == 8 && j == 0) { // перекресный пробел
              td.innerHTML = '';
          }

          // вырисовка фигур
          // black
          if (i == 0 && j == 1 || i == 0 && j == 8) {
            td.innerHTML = images[0];
          }

          if (i == 0 && j == 2 || i == 0 && j == 7) {
            td.innerHTML = images[1];
          }

          if (i == 0 && j == 3 || i == 0 && j == 6) {
            td.innerHTML = images[2];
          }

          if (i == 0 && j == 4) {
            td.innerHTML = images[3];
          }

          if (i == 0 && j == 5) {
            td.innerHTML = images[4];
          }

          if (i == 1 && j != 0) {
            td.innerHTML = images[5];
          }

          // white

          if (i == 6 && j != 0) {
            td.innerHTML = images[11];
          }

          if (i == 7 && j == 1 || i == 7 && j == 8) {
            td.innerHTML = images[6];
          }

          if (i == 7 && j == 2 || i == 7 && j == 7) {
            td.innerHTML = images[7];
          }

          if (i == 7 && j == 3 || i == 7 && j == 6) {
            td.innerHTML = images[8];
          }

          if (i == 7 && j == 4) {
            td.innerHTML = images[9];
          }

          if (i == 7 && j == 5) {
            td.innerHTML = images[10];
          }
        }
        
      }
  }
})();

// сама игра
function gameRun() {
  let name = prompt(`Привет!
Умеешь ли ты ставить детский мат в шахматах?
Введи свое имя, пожалуйста:`, 'Tim');
  let player = {
    name,

    getHistory(i){
      return this[i];
    }
  };
  let myTurn = ['ОК, я хожу e5', 'ОК, я хожу kc6',
   'ОК, я хожу kf6', 'Похоже мне мат('];
  let questions = [
    function q1() {
      let answer = prompt('Твой ход:');
      if (answer == null) return false;
      else if (answer.toLowerCase() == `е4`) {
        player[1] = 'e4';
        player[2] = 'e5';
        return true;
      }
      alert('Неа, давай вспоминай');
      return q1();
    },
    function q2() {
      let answer = prompt('Твой ход:');
      if (answer == null) return false;
      else if (answer.toLowerCase() == `сс4`) {
        player[3] = 'сс4';
        player[4] = 'kc6';
        return true;
      }
      alert('Неа, давай вспоминай');
      return q2();
    },
    function q3() {
      let answer = prompt('Твой ход:');
      if (answer == null) return false;
      else if (answer.toLowerCase() == `фh5`) {
        player[5] = 'фh5';
        player[6] = 'kf6';
        return true;
      }
      alert('Неа, давай вспоминай');
      return q3();
    },

    function q4() {
      let answer = prompt('Мат в один ход:');
      if (answer == null) return false;
      else if (answer.toLowerCase() == `фf7`) {
        player[7] = 'фf7';
        return true;
      }
      alert('Неа, давай вспоминай');
      return q4();
    },
  ];

  for (let i = 0; i < questions.length; i++) {
    let result = questions[i]();

    if (result) {
      alert(myTurn[i]);
    }
    else  {
      let i = prompt('Посмотреть историю:');
      alert(player.getHistory(i));

      return alert(`Что ж ${player.name}, иди учи`);
    }
  }

  let i = prompt('Посмотреть историю:');
  alert(player.getHistory(i));
  return alert(`${player.name}, ты знаешь как выиграть быстро соперника, молодец)`);
};
