class FortMonitorApi {
  constructor() {
    this._sid = 'no-sid';
    this._url = 'http://127.0.0.1:5000/api/fm';
  }

  getResponse = async (url) => {
    const res = await fetch(this._url + url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}, error: ${await res.json()}`);
    } else {
      return res;
    }
  };

  connect = async (login, pass, lang = 'ru-ru', tzone = 5) => {
    const res = await this.getResponse(`/connect?login=${login}&password=${pass}&lang=${lang}&timezone=${tzone}`);
    this._sid = res.headers.get('user-sid') ? res.headers.get('user-sid') : 'no-sid';

    return await res.json();
  };

  disconnect = async () => {
    const res = await this.getResponse(`/disconnect`, {
      headers: { 'user-sid': this._sid },
    });

    return await res.json();
  };

  getCompaniesList = async () => {
    const res = await this.getResponse(`/getcompanieslist`, {
      headers: { 'user-sid': this._sid },
    });

    return await res.json();
  };

  getObjectGroupsList = async () => {
    const res = await this.getResponse(`/getobjectgroupslist`, {
      headers: { 'user-sid': this._sid },
    });

    return await res.json();
  };

  getObjectsList = async (companyId) => {
    const res = await this.getResponse(`/getobjectslist?companyId=${companyId}`, {
      headers: { 'user-sid': this._sid },
    });

    return await res.json();
  };
}

export default FortMonitorApi;
