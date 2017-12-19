export default class WritableStream {

	_buffer: Array<string> = [];

	writeln(msg: string) {
		this.write(`${msg}\n`);
	}

	write(msg: string) {
		this._buffer.push(msg);
	}

	flush() {
		// no-op
	}

	read() {
		return this._buffer.join("");
	}
};
