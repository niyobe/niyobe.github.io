const data_scheme = "http";
const host_name = "";
const port = null;
const url = port? `${data_scheme}://${host_name}:${port}`: `${data_scheme}://${host_name}`

module.exports = {
  data_scheme,
  host_name,
  port,
  url
}